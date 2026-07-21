import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import './public-website.css';

type PayAppClient = {
  call: (params?: Record<string, string>) => void;
};

declare global {
  interface Window {
    PayApp?: PayAppClient;
  }
}

const campaign = {
  name: 'Natural Beauty UGC',
  video: '/assets/hezz-studio/website/hezz-ugc-first-cut.mp4',
  images: {
    product: '/assets/hezz-studio/website/hezz-calming-barrier-serum.png',
    portrait: '/assets/hezz-studio/website/hezz-neutral-face.jpg',
    application: '/assets/hezz-studio/website/hezz-dropper-application.jpg',
    room: '/assets/hezz-studio/website/hezz-product-introduction-room.jpg',
    hand: '/assets/hezz-studio/website/hezz-serum-hand-application.jpg',
    detail: '/assets/hezz-studio/website/hezz-skin-detail.jpg',
    comparisonSmoothed: '/assets/hezz-studio/website/hezz-comparison-smoothed.webp',
    comparisonNatural: '/assets/hezz-studio/website/hezz-comparison-natural.webp',
  },
};

const criteriaWorks = [
  { criterion: 'FRAMING', title: '조금은 어색한 구도', description: '여백과 비대칭이 남아 있는 전신 패션 프레임.', type: 'image', src: '/assets/hezz-studio/website/gallery/full-body-fashion.png', alt: '흰 스튜디오에서 촬영한 전신 패션 모델', left: '2%', top: '1%', height: 'clamp(390px, 52svh, 560px)' },
  { criterion: 'LIGHT', title: '고르지 않은 빛', description: '한쪽에서 들어오는 자연광과 노출 차이를 그대로 남깁니다.', type: 'image', src: campaign.images.room, alt: '자연광 아래 촬영한 HEZZ 스킨케어 장면', left: '8%', top: '37%', height: 'clamp(230px, 31svh, 340px)' },
  { criterion: 'FRAMING', title: '조금은 어색한 구도', description: '창틀 안의 정지된 인물과 흐르는 도시를 함께 담습니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/elderly-corner-motion.jpeg', alt: '차창 너머 도심 모서리에 서 있는 노인과 흐릿한 행인', left: '13%', top: '7%', height: 'clamp(270px, 36svh, 390px)' },
  { criterion: 'TEXTURE', title: '살아 있는 질감', description: '주근깨와 얇은 원단의 결을 지우지 않은 초상.', type: 'image', src: '/assets/hezz-studio/website/gallery/raw-texture-portrait.png', alt: '주근깨와 원단 질감이 보이는 패션 초상', left: '19%', top: '29%', height: 'clamp(290px, 38svh, 410px)' },
  { criterion: 'FRAMING', title: '조금은 어색한 구도', description: '멈춘 인물과 흐르는 도시가 한 프레임에 공존합니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/rossio-motion-street.jpeg', alt: '움직이는 트램과 군중 사이 벤치에 앉은 노인', left: '25%', top: '0%', height: 'clamp(270px, 36svh, 390px)' },
  { criterion: 'EXPRESSION', title: '편안한 표정과 움직임', description: '정면을 응시하는 강한 태도와 느슨한 포즈.', type: 'image', src: '/assets/hezz-studio/website/gallery/editorial-suit-orange.png', alt: '오렌지 배경 앞 수트 차림의 금발 모델', left: '30%', top: '34%', height: 'clamp(280px, 37svh, 400px)' },
  { criterion: 'EXPRESSION', title: '편안한 표정과 움직임', description: '광고를 위해 만든 표정보다 실제 움직임에 가까운 장면.', type: 'video', src: campaign.video, poster: campaign.images.portrait, left: '36%', top: '2%', height: 'clamp(390px, 52svh, 560px)' },
  { criterion: 'EXPRESSION', title: '편안한 표정과 움직임', description: '서로 가까워지는 순간의 시선과 긴장을 포착합니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/sunlit-couple.png', alt: '햇빛 아래 서로 마주 보는 젊은 남녀', left: '42%', top: '35%', height: 'clamp(280px, 37svh, 400px)' },
  { criterion: 'LIGHT', title: '고르지 않은 빛', description: '거리의 역광이 머리카락과 옷의 윤곽을 따라 흐릅니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/blue-cardigan-street.png', alt: '햇빛이 비치는 거리에서 파란 가디건을 입은 여성', left: '46%', top: '0%', height: 'clamp(340px, 45svh, 490px)' },
  { criterion: 'LIGHT', title: '고르지 않은 빛', description: '거울 사이로 스며든 낮은 햇빛을 그대로 사용합니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/mirror-makeup-sunlight.png', alt: '저녁 햇빛 속 거울 앞에서 메이크업하는 인물', left: '51%', top: '36%', height: 'clamp(290px, 38svh, 420px)' },
  { criterion: 'TEXTURE', title: '살아 있는 질감', description: '유리의 반사와 오래된 나무, 거리의 층을 함께 담습니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/perfumer-window-street.jpeg', alt: '거리에서 유리창 너머로 바라본 오래된 향수 공방', left: '53%', top: '34%', height: 'clamp(250px, 33svh, 360px)' },
  { criterion: 'TEXTURE', title: '살아 있는 질감', description: '피부와 제품 표면의 작은 디테일을 지우지 않습니다.', type: 'image', src: campaign.images.detail, alt: '피부결과 미세한 붉은기가 보이는 HEZZ 피부 클로즈업', left: '59%', top: '0%', height: 'clamp(350px, 47svh, 500px)' },
  { criterion: 'LIGHT', title: '고르지 않은 빛', description: '강한 오후 햇빛이 만든 그림자까지 표정의 일부로 남깁니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/sunlit-orange-selfie.png', alt: '강한 오후 햇빛 아래 웃는 금발 모델', left: '64%', top: '39%', height: 'clamp(260px, 34svh, 370px)' },
  { criterion: 'LIGHT', title: '고르지 않은 빛', description: '밤의 입자와 비눗방울에 흩어진 빛을 살립니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/night-bubbles-fashion.png', alt: '밤거리 비눗방울 사이에 선 여성', left: '70%', top: '3%', height: 'clamp(360px, 48svh, 520px)' },
  { criterion: 'EXPRESSION', title: '편안한 표정과 움직임', description: '정돈된 초상 안에서도 시선과 어깨의 미세한 긴장을 남깁니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/quiet-satin-portrait.png', alt: '새틴 의상을 입고 뒤를 돌아보는 인물 초상', left: '76%', top: '38%', height: 'clamp(260px, 35svh, 380px)' },
  { criterion: 'FRAMING', title: '조금은 어색한 구도', description: '잘림과 가림을 남겨 실제 촬영에 가까운 균형을 만듭니다.', type: 'image', src: campaign.images.application, alt: '인물과 스포이드가 비대칭으로 배치된 HEZZ 세럼 도포 장면', left: '81%', top: '1%', height: 'clamp(330px, 44svh, 470px)' },
  { criterion: 'TEXTURE', title: '살아 있는 질감', description: '차가운 색 안에서도 젖은 머리와 피부의 결을 선명하게.', type: 'image', src: '/assets/hezz-studio/website/gallery/blue-scarf-beauty.png', alt: '푸른 스카프를 두른 금발 모델의 뷰티 초상', left: '87%', top: '36%', height: 'clamp(280px, 37svh, 400px)' },
  { criterion: 'FRAMING', title: '조금은 어색한 구도', description: '컵과 필기구가 시선을 가로막는 일상적인 카페 프레임.', type: 'image', src: '/assets/hezz-studio/website/gallery/cafe-study-candid.png', alt: '카페 테이블 너머로 촬영한 공부 중인 인물', left: '92%', top: '4%', height: 'clamp(300px, 40svh, 430px)' },
  { criterion: 'EXPRESSION', title: '편안한 표정과 움직임', description: '제품을 든 손과 표정을 하나의 캠페인 장면으로 연결합니다.', type: 'image', src: '/assets/hezz-studio/website/gallery/coral-lip-campaign.png', alt: '코랄 립 제품을 든 금발 모델의 캠페인 이미지', left: '97%', top: '35%', height: 'clamp(290px, 38svh, 410px)' },
] as const;

const heroSegments = [
  { poster: campaign.images.portrait, start: 0, end: 5 + 18 / 30 },
  { poster: campaign.images.application, start: 7 + 15 / 30, end: 12 },
  { poster: campaign.images.room, start: 12, end: 16 + 13 / 30 },
];

const getMediaQuery = (query: string): MediaQueryList => {
  if (typeof window.matchMedia === 'function') return window.matchMedia(query);

  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  } as MediaQueryList;
};

export function PublicWebsite() {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const heroReadyPanelsRef = useRef(new Set<number>());
  const heroStartedRef = useRef(false);
  const workSectionRef = useRef<HTMLElement | null>(null);
  const workTrackRef = useRef<HTMLDivElement | null>(null);
  const guideSectionRef = useRef<HTMLElement | null>(null);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const [payAppUserId, setPayAppUserId] = useState('');
  const [payAppReady, setPayAppReady] = useState(false);
  const payAppTestEnabled = true;
  const inquirySent = typeof window !== 'undefined'
    && new URLSearchParams(window.location.search).get('inquiry') === 'sent';
  const usesComparisonPlaceholder = campaign.images.comparisonSmoothed === campaign.images.comparisonNatural;

  useLayoutEffect(() => {
    window.history.scrollRestoration = 'manual';

    let firstFrame = 0;
    let secondFrame = 0;
    const isJsdom = typeof navigator !== 'undefined' && /jsdom/i.test(navigator.userAgent);
    const resetScroll = () => {
      if (isJsdom || typeof window.scrollTo !== 'function') return;
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    resetScroll();
    firstFrame = window.requestAnimationFrame(() => {
      resetScroll();
      secondFrame = window.requestAnimationFrame(resetScroll);
    });

    window.addEventListener('pageshow', resetScroll);
    window.addEventListener('load', resetScroll, { once: true });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.removeEventListener('pageshow', resetScroll);
      window.removeEventListener('load', resetScroll);
    };
  }, []);

  useEffect(() => {
    if (!payAppTestEnabled || /jsdom/i.test(navigator.userAgent)) return;

    let cancelled = false;
    const scriptId = 'payapp-lite-script';

    const loadPayApp = async () => {
      try {
        const response = await fetch('/api/payapp-config', { headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error('페이앱 설정을 불러오지 못했습니다.');
        const config = await response.json() as { userId?: string };
        if (!config.userId) throw new Error('페이앱 판매자 아이디가 설정되지 않았습니다.');

        let script = document.getElementById(scriptId) as HTMLScriptElement | null;
        if (!script) {
          script = document.createElement('script');
          script.id = scriptId;
          script.src = 'https://lite.payapp.kr/public/api/v2/payapp-lite.js';
          script.async = true;
          document.head.appendChild(script);
        }

        if (!window.PayApp) {
          await new Promise<void>((resolve, reject) => {
            script?.addEventListener('load', () => resolve(), { once: true });
            script?.addEventListener('error', () => reject(new Error('페이앱 결제 모듈을 불러오지 못했습니다.')), { once: true });
          });
        }

        if (!cancelled && window.PayApp) {
          setPayAppUserId(config.userId);
          setPayAppReady(true);
        }
      } catch (error) {
        console.error(error);
        if (!cancelled) setPayAppReady(false);
      }
    };

    void loadPayApp();
    return () => {
      cancelled = true;
    };
  }, [payAppTestEnabled]);

  const handlePayAppTest = () => {
    if (!payAppTestEnabled || !payAppReady || !payAppUserId || !window.PayApp) {
      window.alert('페이앱 테스트 결제를 준비하고 있습니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    const approved = window.confirm(
      '페이앱 연동 확인용 1,000원 결제입니다. 실제 승인이 발생할 수 있으므로 테스트 결제 정책과 취소 상태를 반드시 확인해주세요.',
    );
    if (!approved) return;

    const origin = window.location.origin;
    window.PayApp.call({
      userid: payAppUserId,
      shopname: 'HEZZ STUDIO',
      goodname: 'Natural Beauty UGC 제작 가이드 연동 테스트',
      price: '1000',
      memo: 'HEZZ STUDIO 페이앱 연동 테스트',
      reqaddr: '0',
      smsuse: 'n',
      openpaytype: 'card',
      feedbackurl: `${origin}/api/payapp-feedback`,
      returnurl: `${origin}/?payment=test-complete#guide`,
      checkretry: 'y',
    });
  };

  useEffect(() => {
    const updateNav = () => setIsNavScrolled(window.scrollY > 24);
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    return () => window.removeEventListener('scroll', updateNav);
  }, []);

  useEffect(() => {
    if (/jsdom/i.test(navigator.userAgent)) return;

    const reducedMotionQuery = getMediaQuery('(prefers-reduced-motion: reduce)');
    const syncVideoMotion = () => {
      const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('.public-site video'));

      videos.forEach((video) => {
        if (reducedMotionQuery.matches) {
          video.pause();
          return;
        }

        if (video.autoplay) void video.play().catch(() => undefined);
      });
    };

    syncVideoMotion();
    reducedMotionQuery.addEventListener('change', syncVideoMotion);
    return () => reducedMotionQuery.removeEventListener('change', syncVideoMotion);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal-section]'));
    if (sections.length === 0) return;

    const reducedMotion = typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || typeof window.IntersectionObserver !== 'function') {
      sections.forEach((section) => section.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = guideSectionRef.current;
    if (!section) return;

    const mobileQuery = getMediaQuery('(max-width: 900px)');
    const reducedMotionQuery = getMediaQuery('(prefers-reduced-motion: reduce)');
    let animationFrame = 0;

    const clampProgress = (value: number) => Math.min(1, Math.max(0, value));
    const ease = (value: number) => 1 - Math.pow(1 - clampProgress(value), 3);
    const segment = (progress: number, start: number, end: number) => ease((progress - start) / (end - start));

    const updateGuideMotion = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        if (mobileQuery.matches || reducedMotionQuery.matches) {
          section.style.removeProperty('--guide-cover-opacity');
          section.style.removeProperty('--guide-cover-y');
          section.style.removeProperty('--guide-cover-rotate');
          section.style.removeProperty('--guide-cover-scale');
          section.style.removeProperty('--guide-copy-progress');
          section.style.removeProperty('--guide-copy-y');
          section.style.removeProperty('--guide-price-progress');
          section.style.removeProperty('--guide-price-y');
          section.style.removeProperty('--guide-button-progress');
          section.style.removeProperty('--guide-button-y');
          return;
        }

        const travel = Math.max(1, section.offsetHeight - window.innerHeight);
        const sectionTop = section.getBoundingClientRect().top;
        const progress = clampProgress((window.innerHeight - sectionTop) / (window.innerHeight + travel));
        const coverProgress = segment(progress, 0, 0.56);
        const copyProgress = segment(progress, 0.48, 0.7);
        const priceProgress = segment(progress, 0.67, 0.84);
        const buttonProgress = segment(progress, 0.8, 0.96);

        section.style.setProperty('--guide-cover-opacity', (0.35 + coverProgress * 0.65).toFixed(4));
        section.style.setProperty('--guide-cover-y', `${(72 * (1 - coverProgress)).toFixed(3)}svh`);
        section.style.setProperty('--guide-cover-rotate', `${(-8 * (1 - coverProgress)).toFixed(3)}deg`);
        section.style.setProperty('--guide-cover-scale', (0.72 + coverProgress * 0.28).toFixed(4));
        section.style.setProperty('--guide-copy-progress', copyProgress.toFixed(4));
        section.style.setProperty('--guide-copy-y', `${(32 * (1 - copyProgress)).toFixed(3)}px`);
        section.style.setProperty('--guide-price-progress', priceProgress.toFixed(4));
        section.style.setProperty('--guide-price-y', `${(24 * (1 - priceProgress)).toFixed(3)}px`);
        section.style.setProperty('--guide-button-progress', buttonProgress.toFixed(4));
        section.style.setProperty('--guide-button-y', `${(20 * (1 - buttonProgress)).toFixed(3)}px`);
      });
    };

    updateGuideMotion();
    window.addEventListener('scroll', updateGuideMotion, { passive: true });
    window.addEventListener('resize', updateGuideMotion);
    mobileQuery.addEventListener('change', updateGuideMotion);
    reducedMotionQuery.addEventListener('change', updateGuideMotion);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateGuideMotion);
      window.removeEventListener('resize', updateGuideMotion);
      mobileQuery.removeEventListener('change', updateGuideMotion);
      reducedMotionQuery.removeEventListener('change', updateGuideMotion);
    };
  }, []);

  useLayoutEffect(() => {
    const section = workSectionRef.current;
    const track = workTrackRef.current;
    if (!section || !track) return;

    const mobileQuery = getMediaQuery('(max-width: 900px)');
    const reducedMotionQuery = getMediaQuery('(prefers-reduced-motion: reduce)');
    const viewport = section.querySelector<HTMLElement>('.work-viewport');
    const cards = Array.from(track.querySelectorAll<HTMLElement>('.work-card'));
    let animationFrame = 0;
    let horizontalDistance = 1;

    section.classList.add('work-motion-ready');

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const easeOut = (value: number) => 1 - Math.pow(1 - clamp(value), 3);
    const usesNativeHorizontalScroll = () => mobileQuery.matches || reducedMotionQuery.matches;
    const measureHorizontalDistance = () => Math.max(1, Math.ceil(track.scrollWidth - window.innerWidth));

    const updateWorkMotion = (horizontalOffset: number) => {
      const sectionRect = section.getBoundingClientRect();

      if (reducedMotionQuery.matches) {
        section.classList.add('is-work-active');
        cards.forEach((card) => {
          card.style.setProperty('--work-opacity', '1');
          card.style.setProperty('--work-scale', '1');
          card.style.setProperty('--work-blur', '0px');
        });
        return;
      }

      const headingActive = sectionRect.top <= window.innerHeight * 0.74
        && sectionRect.bottom >= window.innerHeight * 0.18;
      section.classList.toggle('is-work-active', headingActive);

      const cascadeProgress = mobileQuery.matches
        ? clamp((window.innerHeight * 0.78 - sectionRect.top) / (window.innerHeight * 0.46))
        : clamp((window.innerHeight * 0.2 - sectionRect.top) / (window.innerHeight * 0.42));
      const revealStart = window.innerWidth * 1.02;
      const revealEnd = window.innerWidth * 0.78;
      const revealDistance = Math.max(1, revealStart - revealEnd);
      const maxHorizontalOffset = usesNativeHorizontalScroll()
        ? Math.max(1, track.scrollWidth - (viewport?.clientWidth ?? window.innerWidth))
        : horizontalDistance;
      const scrollCompletion = clamp(horizontalOffset / maxHorizontalOffset);
      const headingVisibility = 1 - clamp(scrollCompletion / 0.1);
      section.style.setProperty('--work-heading-opacity', headingVisibility.toFixed(4));
      section.style.setProperty('--work-heading-y', `${(-12 * (1 - headingVisibility)).toFixed(2)}px`);
      const endReveal = clamp((scrollCompletion - 0.93) / 0.07);

      cards.forEach((card, index) => {
        const screenLeft = card.offsetLeft - horizontalOffset;
        const viewportProgress = clamp((revealStart - screenLeft) / revealDistance);
        const staggerGate = clamp((cascadeProgress - Math.min(index, 6) * 0.08) / 0.2);
        const reveal = easeOut(Math.max(Math.min(viewportProgress, staggerGate), endReveal));
        const hidden = 1 - reveal;
        card.style.setProperty('--work-opacity', reveal.toFixed(4));
        card.style.setProperty('--work-scale', (0.965 + reveal * 0.035).toFixed(4));
        card.style.setProperty('--work-blur', `${(hidden * 6).toFixed(2)}px`);
      });
    };

    const updateScrollPosition = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        if (usesNativeHorizontalScroll()) {
          track.style.transform = '';
          updateWorkMotion(viewport?.scrollLeft ?? 0);
          return;
        }

        const progress = clamp(-section.getBoundingClientRect().top / horizontalDistance);
        const horizontalOffset = horizontalDistance * progress;
        track.style.transform = `translate3d(${-horizontalOffset}px, 0, 0)`;
        updateWorkMotion(horizontalOffset);
      });
    };

    const updateLayout = () => {
      if (usesNativeHorizontalScroll()) {
        section.style.removeProperty('height');
        track.style.transform = '';
      } else {
        horizontalDistance = measureHorizontalDistance();
        section.style.setProperty('height', `${window.innerHeight + horizontalDistance}px`, 'important');
      }
      updateScrollPosition();
    };

    const media = Array.from(track.querySelectorAll('img, video'));
    media.forEach((element) => {
      element.addEventListener('load', updateLayout);
      element.addEventListener('loadedmetadata', updateLayout);
    });

    updateLayout();
    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(updateLayout)
      : null;
    resizeObserver?.observe(track);
    window.addEventListener('resize', updateLayout);
    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    viewport?.addEventListener('scroll', updateScrollPosition, { passive: true });
    mobileQuery.addEventListener('change', updateLayout);
    reducedMotionQuery.addEventListener('change', updateLayout);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      media.forEach((element) => {
        element.removeEventListener('load', updateLayout);
        element.removeEventListener('loadedmetadata', updateLayout);
      });
      window.removeEventListener('resize', updateLayout);
      window.removeEventListener('scroll', updateScrollPosition);
      viewport?.removeEventListener('scroll', updateScrollPosition);
      mobileQuery.removeEventListener('change', updateLayout);
      reducedMotionQuery.removeEventListener('change', updateLayout);
      section.classList.remove('work-motion-ready', 'is-work-active');
      section.style.removeProperty('--work-heading-opacity');
      section.style.removeProperty('--work-heading-y');
      cards.forEach((card) => {
        card.style.removeProperty('--work-opacity');
        card.style.removeProperty('--work-y');
        card.style.removeProperty('--work-scale');
        card.style.removeProperty('--work-blur');
      });
    };
  }, []);

  const setPanelStart = (video: HTMLVideoElement, panelIndex: number) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    video.currentTime = heroSegments[panelIndex].start;
  };

  const keepPanelInSegment = (video: HTMLVideoElement, panelIndex: number) => {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;

    const segment = heroSegments[panelIndex];
    const segmentStart = segment.start;
    const segmentEnd = segment.end ?? video.duration;

    if (video.currentTime >= segmentEnd - 0.08 || video.currentTime < segmentStart) {
      video.currentTime = segmentStart;
      void video.play();
    }
  };

  const startHeroTogether = (video: HTMLVideoElement, panelIndex: number) => {
    if (heroStartedRef.current) return;

    video.pause();
    heroReadyPanelsRef.current.add(panelIndex);
    if (heroReadyPanelsRef.current.size < heroSegments.length) return;

    heroStartedRef.current = true;
    videoRefs.current.forEach((panel, index) => {
      if (!panel) return;
      panel.currentTime = heroSegments[index].start;
    });
    setIsHeroReady(true);

    window.requestAnimationFrame(() => {
      document.documentElement.classList.add('hero-app-ready');

      if (!getMediaQuery('(prefers-reduced-motion: reduce)').matches) {
        videoRefs.current.forEach((panel) => {
          if (panel) void panel.play().catch(() => undefined);
        });
      }
    });
  };

  return (
    <div className="public-site">
      <header className={`public-hero${isHeroReady ? ' hero-ready' : ''}`} id="top">
        <nav className={`public-nav${isNavScrolled ? ' public-nav-scrolled' : ''}`} aria-label="공개 사이트 탐색">
          <a className="public-wordmark" href="#top" aria-label="HEZZ STUDIO 처음으로">
            <img src="/assets/hezz-studio/website/hezz-studio-logo.png" alt="HEZZ STUDIO" />
          </a>
          <div className="public-nav-links">
            <a href="#work">Work</a>
            <a href="#guide">Guide</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-sticky">
          <div className="hero-frame">
            <div className="hero-panels">
              {heroSegments.map((segment, panelIndex) => (
                <figure
                  className={`hero-film hero-panel ${panelIndex === 1 ? 'hero-panel-primary' : 'hero-panel-secondary'}`}
                  aria-hidden={panelIndex !== 1}
                  key={`${segment.start}-${segment.end}`}
                >
                  <video
                    ref={(video) => {
                      videoRefs.current[panelIndex] = video;
                    }}
                    src={campaign.video}
                    muted
                    playsInline
                    preload="auto"
                    aria-label={panelIndex === 1 ? 'HEZZ Natural Beauty UGC 캠페인 필름' : undefined}
                    onLoadedMetadata={(event) => setPanelStart(event.currentTarget, panelIndex)}
                    onCanPlay={(event) => startHeroTogether(event.currentTarget, panelIndex)}
                    onTimeUpdate={(event) => keepPanelInSegment(event.currentTarget, panelIndex)}
                    onEnded={(event) => keepPanelInSegment(event.currentTarget, panelIndex)}
                  />
                </figure>
              ))}
            </div>

            <div className="hero-shade" />
            <div className="hero-brand" aria-label="HEZZ STUDIO">
              <img src="/assets/hezz-studio/website/hezz-studio-logo.png" alt="" />
              <p>AI CREATIVE STUDIO</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="statement-section reveal-section" id="statement" data-reveal-section>
          <div className="section-inner statement-inner">
            <div className="statement-copy">
              <h2 className="reveal-item" style={{ '--reveal-order': 0 } as CSSProperties}>
                만들어진 장면보다,
                <br />
                포착된 순간에 가깝게.
              </h2>
              <p className="statement-primary reveal-item" style={{ '--reveal-order': 1 } as CSSProperties}>
                AI 특유의 매끄러움과 완벽함 대신,
                <br />
                고르지 않은 빛과 살아 있는 질감, 편안한 표정,
                <br />
                살짝 어색한 구도를 남깁니다.
              </p>
              <p className="statement-closing reveal-item" style={{ '--reveal-order': 2 } as CSSProperties}>
                HEZZ STUDIO는 AI로 만든 장면도
                <br />
                실제 순간처럼 느껴지도록 연구하고 설계합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="campaign-section reveal-section" id="campaign" data-reveal-section>
          <div className="section-inner image-study">
            <div className="image-study-heading">
              <div>
                <h3 className="reveal-item" style={{ '--reveal-order': 0 } as CSSProperties}>같은 인물,<br />다른 현실감.</h3>
              </div>
              <p className="reveal-item" style={{ '--reveal-order': 1 } as CSSProperties}>
                완벽한 대칭과 과한 보정을 걷어내고,<br />
                실제 순간에 가까운 표정과 피부 질감을 남깁니다.
              </p>
              <p className="comparison-disclosure reveal-item" style={{ '--reveal-order': 2 } as CSSProperties}>
                동일한 AI 생성 인물·구도 기반의 질감 비교 이미지입니다.
              </p>
            </div>

            <div
              className="comparison-frame reveal-item"
              style={{ touchAction: 'pan-y', '--reveal-order': 3 } as CSSProperties}
            >
              <img
                src={campaign.images.comparisonNatural}
                alt="모공과 미세한 피부결이 자연스럽게 남아 있는 AI 인물"
                className="comparison-image"
                loading="lazy"
                draggable={false}
              />
              <div
                className="comparison-before"
                style={{ clipPath: `inset(0 ${100 - comparisonPosition}% 0 0)` }}
                aria-hidden="true"
              >
                <img
                  src={campaign.images.comparisonSmoothed}
                  alt=""
                  className={`comparison-image${usesComparisonPlaceholder ? ' comparison-placeholder' : ''}`}
                  loading="lazy"
                  draggable={false}
                />
              </div>

              <span className="comparison-label comparison-label-left">SMOOTHED</span>
              <span className="comparison-label comparison-label-right">NATURAL TEXTURE</span>
              <span className="comparison-subject" aria-hidden="true">SKIN</span>
              <div className="comparison-divider" style={{ left: `${comparisonPosition}%` }} aria-hidden="true">
                <span className="comparison-handle">‹&nbsp;&nbsp;›</span>
              </div>
              <input
                className="comparison-range"
                type="range"
                min="0"
                max="100"
                value={comparisonPosition}
                onChange={(event) => setComparisonPosition(Number(event.target.value))}
                aria-label="매끄러운 AI 피부와 자연스러운 피부결 비교"
                aria-valuetext={`매끄러운 이미지가 ${comparisonPosition}% 보임`}
              />
            </div>
          </div>
        </section>

        <section
          className="work-section"
          id="work"
          aria-labelledby="work-heading"
          ref={workSectionRef}
        >
          <div className="work-sticky">
            <div className="section-inner work-heading">
              <h2 id="work-heading">자연스러움을 만드는 기준</h2>
            </div>
            <div className="work-viewport">
              <div className="work-track" ref={workTrackRef}>
                {criteriaWorks.map((work) => (
                  <figure
                    className="work-card"
                    key={work.src}
                    style={{
                      '--work-left': work.left,
                      '--work-top': work.top,
                      '--work-media-height': work.height,
                    } as CSSProperties}
                  >
                    <div className="work-media">
                      {work.type === 'video' ? (
                        <video
                          src={work.src}
                          poster={'poster' in work ? work.poster : undefined}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          aria-label="편안한 표정과 움직임을 보여주는 HEZZ Natural Beauty UGC 영상"
                        />
                      ) : (
                        <img src={work.src} alt={work.alt} loading="lazy" />
                      )}
                    </div>
                    <figcaption className="work-caption">
                      <p className="work-criterion">{work.criterion}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section" ref={guideSectionRef}>
          <span className="guide-anchor" id="guide" aria-hidden="true" />
          <div className="guide-sticky">
            <div className="section-inner guide-layout">
              <div className="guide-visual" aria-label="가이드 미리보기">
                <div className="guide-cover guide-cover-back"><span>VISUAL BIBLE</span></div>
                <div className="guide-cover guide-cover-front">
                  <span className="guide-cover-brand">HEZZ STUDIO</span>
                  <div><p>NATURAL<br />BEAUTY UGC</p><strong>제작 가이드</strong></div>
                  <span className="guide-cover-edition">KOREAN FIRST EDITION</span>
                </div>
              </div>

              <div className="guide-copy">
                <p className="guide-quote">완벽한 구도는 기억에 남지 않습니다.<br />기억에 남는 건 언제나 그 사이의 어딘가였습니다.</p>
                <h2>Natural Beauty UGC<br />제작 가이드</h2>
                <p className="guide-description">
                  제품 레퍼런스 준비부터 페르소나, 비주얼 바이블, 장면별 프롬프트, 실패 수정과 영상 확장까지
                  실제 제작 순서대로 담았습니다.
                </p>
                <div className="guide-bonuses">
                  <p><span>기본 구성</span> 가이드북 + 페르소나·비주얼 바이블 워크시트</p>
                  <p><span>후기 혜택</span> 솔직한 구매 후기 작성 시 최종 제작 체크리스트 제공</p>
                </div>
                <div className="guide-action">
                  <div className="guide-purchase">
                    <button
                      className="public-button public-button-light"
                      type="button"
                      disabled={!payAppTestEnabled || !payAppReady}
                      onClick={handlePayAppTest}
                    >
                      {payAppTestEnabled
                        ? (payAppReady ? '페이앱 테스트 결제 · 1,000원' : '테스트 결제 준비 중')
                        : '구매 준비 중'}
                    </button>
                    {payAppTestEnabled && (
                      <p className="guide-test-note">연동 확인 전용 · 실제 결제 승인 및 취소 상태를 페이앱에서 확인하세요.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section reveal-section" id="contact" data-reveal-section>
          <div className="section-inner contact-inner">
            <div className="contact-copy">
              <h2 className="reveal-item" style={{ '--reveal-order': 0 } as CSSProperties}>브랜드의 다음 장면,<br /><span>같이 찾아볼까요?</span></h2>
              <p className="reveal-item" style={{ '--reveal-order': 1 } as CSSProperties}>
                제품과 브랜드의 분위기에 맞는 AI 이미지와 영상 캠페인을 함께 설계합니다.
              </p>
            </div>

            <form className="inquiry-form reveal-item" style={{ '--reveal-order': 2 } as CSSProperties} action="https://formsubmit.co/lroi23667@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="[HEZZ STUDIO] 새로운 프로젝트 문의" />
              <input type="hidden" name="_next" value="https://hezzstudio.site/?inquiry=sent#contact" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="inquiry-honeypot" tabIndex={-1} autoComplete="off" />

              <div className="inquiry-grid">
                <label><span>이름 / 담당자명 *</span><input type="text" name="name" autoComplete="name" required /></label>
                <label><span>이메일 *</span><input type="email" name="email" autoComplete="email" required /></label>
                <label><span>브랜드명</span><input type="text" name="brand" autoComplete="organization" /></label>
                <label>
                  <span>문의 유형 *</span>
                  <select name="project_type" defaultValue="" required>
                    <option value="" disabled>선택해 주세요</option>
                    <option>AI 이미지 제작</option>
                    <option>제품 후기 영상 제작</option>
                    <option>광고 콘텐츠 제작</option>
                    <option>기타</option>
                  </select>
                </label>
                <label><span>희망 일정</span><input type="text" name="schedule" placeholder="예: 8월 둘째 주" /></label>
                <label><span>예산 범위</span><input type="text" name="budget" placeholder="예: 50만 원 내외" /></label>
                <label className="inquiry-wide"><span>제작 내용 *</span><textarea name="message" rows={6} placeholder="필요한 이미지·영상의 용도와 수량을 알려주세요." required /></label>
                <label className="inquiry-wide"><span>참고 링크</span><input type="url" name="reference_url" placeholder="https://" /></label>
              </div>

              <label className="inquiry-consent">
                <input type="checkbox" name="privacy_consent" value="동의" required />
                <span>문의 답변을 위한 개인정보 수집·이용에 동의합니다. *</span>
              </label>
              {inquirySent && <p className="inquiry-success" role="status">문의가 접수되었습니다. 확인 후 이메일로 연락드리겠습니다.</p>}
              <button className="public-button inquiry-submit" type="submit">프로젝트 문의 보내기 <span aria-hidden="true">↗</span></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="public-footer">
        <div className="section-inner footer-inner">
          <img src="/assets/hezz-studio/website/hezz-studio-logo.png" alt="HEZZ STUDIO" />
          <nav aria-label="푸터 탐색">
            <a href="#work">Work</a><a href="#guide">Guide</a><a href="#contact">Contact</a>
          </nav>
          <p>© 2026 HEZZ STUDIO</p>
        </div>
      </footer>
    </div>
  );
}
