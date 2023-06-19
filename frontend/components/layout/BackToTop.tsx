interface BackToTopProps {
  onScroll: () => void;
  onVisbile: () => void;
  visible: boolean;
}
  
export default function BackToTop({ onScroll, onVisbile, visible }: BackToTopProps) {
    if (typeof window === 'object') window.addEventListener('scroll', onVisbile);
  
    return (
      <div>
        <div className="fixed bottom-11 right-4 md:right-8">
          <button
            title="scroll to top"
            className="rounded-full lg:p-3 p-2 bg-blue-500 dark:bg-blue-300 text-white drop-shadow-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700"
            onClick={onScroll}
            style={{ display: visible ? 'inline-block' : 'none' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        <h1
          style={{
            position: 'fixed',
            bottom: 25,
            left: '40%',
            display: visible ? 'inline-block' : 'none',
          }}
        >
          {' '}
        </h1>
      </div>
    );
  }