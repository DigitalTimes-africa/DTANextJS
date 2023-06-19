import Image from 'next/image';
import ArrowLeft from '@/assets/img/icons/fa_arrow_left_long.svg';
import ArrowRight from '@/assets/img/icons/fa_arrow_right_long.svg';
import ArrowLeftW from '@/assets/img/icons/fa_arrow_left_long_white.svg';
import ArrowRightW from '@/assets/img/icons/fa_arrow_right_long_white.svg';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between border-t border-gray-200 pt-4 xmd:mb-8 mb-12 pb-12 xmd:pb-8">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1  : currentPage)}>
        <Image src={ArrowLeft} className="block dark:hidden" alt="Arrow Left" />
        <Image src={ArrowLeftW} className="hidden dark:block" alt="Arrow Left" />
        <span>Previous</span>
      </div>
      <nav>
        <ul className="flex mt-4">
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`px-3 py-2 rounded-full cursor-pointer mx-1 ${
                pageNumber === currentPage
                  ? 'bg-btn-black text-white font-bold'
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}>
        <span>Next</span>
        <Image src={ArrowRight} className="block dark:hidden" alt="Arrow Right" />
        <Image src={ArrowRightW} className="hidden dark:block" alt="Arrow Right" />
      </div>
    </div>
  );
};

export default Pagination;
