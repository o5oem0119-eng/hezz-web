import { useEffect, useState } from 'react';
import './lab-note-pages.css';

type Media = { id: string; sourceId: string; kind: 'image' | 'video'; label: string; contentType: string; url: string };
type Prompt = { id: string; label: string; body: string; negativePrompt: string | null };
type IndexItem = { slug: string; title: string; oneLineDescription: string; cover: Media; toolNames: string[] };
type Detail = IndexItem & {
  caseId: string;
  finalVideo: Media | null;
  introduction: string;
  steps: Array<{ id: string; title: string; body: string; media: Media[]; prompts: Prompt[] }>;
  learningNotes: string[];
  finalResults: Media[];
  disclosure: string;
  notices: string[];
};

export function LabNoteRoute({ pathname }: { pathname: string }) {
  const slug = pathname.startsWith('/lab-notes/') ? decodeURIComponent(pathname.slice('/lab-notes/'.length)) : '';
  return slug ? <LabNoteDetail slug={slug} /> : <LabNoteList />;
}

function LabNoteList() {
  const [items, setItems] = useState<IndexItem[] | null>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    void fetch('/lab-notes/index.json', { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('Lab Note 목록을 불러오지 못했습니다.')))
      .then(setItems)
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Lab Note 목록을 불러오지 못했습니다.'));
  }, []);
  return <main className="lab-note-site">
    <SiteHeader />
    <header className="lab-note-list-heading"><p>HEZZ STUDIO ARCHIVE</p><h1>LAB NOTE</h1><span>이미지와 영상을 만든 과정, 선택한 프롬프트와 수정 기록을 정리합니다.</span></header>
    {error && <p role="alert">{error}</p>}
    {!items && !error && <p>Lab Note를 불러오는 중입니다.</p>}
    {items && items.length === 0 && <p>공개된 Lab Note가 아직 없습니다.</p>}
    <section className="lab-note-grid" aria-label="Lab Note 목록">
      {items?.map((item) => <a className="lab-note-card" href={`/lab-notes/${item.slug}`} key={item.slug}>
        <img src={item.cover.url} alt={item.cover.label} />
        <h2>{item.title}</h2><p>{item.oneLineDescription}</p>
        <ul>{item.toolNames.map((tool) => <li key={tool}>{tool}</li>)}</ul>
      </a>)}
    </section>
  </main>;
}

function LabNoteDetail({ slug }: { slug: string }) {
  const [model, setModel] = useState<Detail | null>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    void fetch(`/lab-notes/data/${encodeURIComponent(slug)}.json`, { cache: 'no-store' })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('Lab Note를 찾을 수 없습니다.')))
      .then(setModel)
      .catch((reason: unknown) => setError(reason instanceof Error ? reason.message : 'Lab Note를 불러오지 못했습니다.'));
  }, [slug]);
  if (error) return <main className="lab-note-site"><SiteHeader /><p role="alert">{error}</p></main>;
  if (!model) return <main className="lab-note-site"><SiteHeader /><p>Lab Note를 불러오는 중입니다.</p></main>;
  return <main className="lab-note-site lab-note-detail">
    <SiteHeader /><a className="lab-note-back" href="/lab-notes">← Lab Note로 돌아가기</a>
    <img className="lab-note-cover" src={model.cover.url} alt={model.cover.label} />
    <header><h1>{model.title}</h1><p>{model.oneLineDescription}</p><ul>{model.toolNames.map((tool) => <li key={tool}>{tool}</li>)}</ul></header>
    {model.finalVideo && <section><h2>최종 영상</h2><video controls src={model.finalVideo.url} /></section>}
    <section><h2>작업 소개</h2><p>{model.introduction}</p></section>
    {model.steps.map((step, index) => <section className="lab-note-step" key={step.id}><span>STEP {index + 1}</span><h2>{step.title}</h2><p>{step.body}</p><MediaGallery media={step.media} />{step.prompts.map((prompt) => <PromptBlock prompt={prompt} key={prompt.id} />)}</section>)}
    {model.learningNotes.length > 0 && <section><h2>수정·학습 기록</h2><ul>{model.learningNotes.map((note) => <li key={note}>{note}</li>)}</ul></section>}
    {model.finalResults.length > 0 && <section><h2>최종 결과</h2><MediaGallery media={model.finalResults} /></section>}
    <footer className="lab-note-disclosure"><p>{model.disclosure}</p>{model.notices.map((notice) => <p key={notice}>{notice}</p>)}</footer>
    <a className="lab-note-back" href="/lab-notes">← Lab Note로 돌아가기</a>
  </main>;
}

function SiteHeader() { return <nav className="lab-note-nav"><a href="/">HEZZ STUDIO</a><a href="/lab-notes">Lab Note</a></nav>; }
function MediaGallery({ media }: { media: Media[] }) { return <div className="lab-note-media">{media.map((item) => item.kind === 'video' ? <video controls src={item.url} key={item.id} /> : <img src={item.url} alt={item.label} key={item.id} />)}</div>; }
function PromptBlock({ prompt }: { prompt: Prompt }) { return <details className="lab-note-prompt"><summary>{prompt.label} 전체 보기</summary><pre>{prompt.body}</pre><button type="button" onClick={() => void navigator.clipboard.writeText(prompt.body)}>프롬프트 복사</button>{prompt.negativePrompt && <><h3>네거티브 프롬프트</h3><pre>{prompt.negativePrompt}</pre><button type="button" onClick={() => void navigator.clipboard.writeText(prompt.negativePrompt!)}>네거티브 프롬프트 복사</button></>}</details>; }
