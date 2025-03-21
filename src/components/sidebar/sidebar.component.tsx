import { Style } from "../style/style.component";
import styles from "./sidebar.module.scss";
import { cn } from "@/utils/cn";

export function Sidebar() {
    return (
        <aside
            id="sidebar"
            className={cn(
                styles.sidebar,
                "w-72 p-4 bg-gray-800 text-white border border-gray-700 rounded-lg h-screen flex flex-col"
            )}
        >
            {/* 상단 영역: 블로그 이름 + 스위치 */}
            <div className="flex justify-between items-center w-full mb-6 px-2">
                <h2 className="text-xs font-medium text-white">
                    [##_title_##]
                </h2>

                {/* 토글 가능한 스위치 버튼 */}
                <button id="sidebar-toggle" className="w-12 h-6 bg-gray-500 rounded-full p-1 flex items-center transition-colors duration-300">
                    <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0" />
                </button>
            </div>

            {/* 프로필 섹션 */}
            <div className="flex flex-col items-center mb-6">
                {/* 프로필 이미지 */}
                <img
                    src="[##_image_##]"
                    alt="관리자 프로필"
                    className="w-24 h-24 rounded-full border-2 border-gray-500 shadow-md"
                />
                {/* 관리자 이름 */}
                <p className="mt-2 text-lg font-semibold text-white">
                    [##_blogger_##]
                </p>

                {/* GitHub 버튼 */}
                <a
                    href="https://github.com/ican0422"
                    target="_blank"
                    className="mt-2 px-2 py-0.2 flex items-center justify-start bg-white text-black text-sm rounded-full shadow tracking-tighter"
                >
                    <img src="./images/github-icon.svg" className="w-6 h-6 md:w-8 md:h-8 ml-[-8px] mr-1" />
                    <span className="ml-[-5px]">GitHub</span>
                </a>
            </div>

            {/* 방문자 수 섹션 */}
            <div className="flex justify-between items-center w-full px-2 text-white mb-2">
                {/* 전체 방문자 (왼쪽 정렬) */}
                <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">전체</span>
                    {/* <span className="text-lg font-bold">[##_count_total_##]</span> */}
                    <span className="text-lg font-bold">846,200</span>
                </div>

                {/* 어제 & 오늘 방문자 (오른쪽 정렬) */}
                <div className="flex space-x-4">
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium">어제</span>
                        {/* <span className="text-lg font-bold">[##_count_yesterday_##]</span> */}
                        <span className="text-lg font-bold">16</span>
                    </div>
                    <div className="flex flex-col items-center border-l border-gray-500 pl-3">
                        <span className="text-sm font-medium">오늘</span>
                        {/* <span className="text-lg font-bold">[##_count_today_##]</span> */}
                        <span className="text-lg font-bold">800</span>
                    </div>
                </div>
            </div>

            {/* 구분선 */}
            <hr className="border-gray-500 w-full my-2" />

            {/* 전체 글 보기 버튼 */}
            <a href="/archives" className="flex items-center bg-gray-200 text-black px-4 py-3 rounded w-full hover:bg-gray-300">
                <img src="./images/category-icon.svg" className="w-6 h-6 mr-2" />
                전체 글 보기
            </a>

            {/* 다크 모드 대응 */}
            <s_if_var_dark_mode_type>
                <Style
                    html={`  
            #sidebar {
              background-color: #333;
              color: #fff;
            }
            #sidebar a {
              color: #ddd;
            }
            #sidebar a:hover {
              color: #fff;
            }
          `}
                />
            </s_if_var_dark_mode_type>
        </aside>
    );
}
