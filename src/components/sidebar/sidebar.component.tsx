import { Style } from "../style/style.component";
import styles from "./sidebar.module.scss";
import { cn } from "@/utils/cn";

export function Sidebar() {
    return (
        <aside id="sidebar" className={cn(styles.sidebar, "w-80 p-4 bg-gray-100 dark:bg-gray-200 border border-gray-300 rounded-lg h-screen flex flex-col items-center")}>
            {/* 상단 영역: 블로그 이름 + 스위치 */}
            <div className="flex justify-between items-center w-full mb-6">
                <h2 className="font-medium text-gray-700" style={{ fontSize: "24px" }}>
                    [##_title_##]
                </h2>

                {/* 토글 가능한 스위치 버튼 */}
                <button id="sidebar-toggle" className="w-12 h-6 bg-gray-300 rounded-full p-1 flex items-center transition-colors duration-300">
                    <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0" />
                </button>
            </div>

            {/* 프로필 섹션 */}
            <div className="flex flex-col items-center mb-6">
                {/* 프로필 이미지 */}
                <img
                    src="[##_image_##]"
                    alt="프로필 사진진"
                    className="w-20 h-20 rounded-full border-2 border-gray-400 shadow-md"
                />
                {/* 관리자 이름 */}
                <p className="mt-2 text-lg font-semibold">
                    [##_blogger_##]
                </p>
            </div>

            {/* 방문자 수 섹션 (정렬 조정) */}
            <div className="flex justify-between items-center w-full px-2 text-gray-700">
                {/* 전체 방문자 (왼쪽 정렬) */}
                <div className="flex flex-col items-start">
                    <span className="text-sm font-medium">전체</span>
                    {/* <span className="text-base font-bold">[##_count_total_##]</span> */}
                    <span className="text-base font-bold">844,620</span>
                </div>

                {/* 어제 & 오늘 방문자 (오른쪽 정렬) */}
                <div className="flex space-x-4">
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium">어제</span>
                        {/* <span className="text-base font-bold">[##_count_yesterday_##]</span> */}
                        <span className="text-base font-bold">176</span>
                    </div>
                    <div className="flex flex-col items-center border-l border-gray-400 pl-3">
                        <span className="text-sm font-medium">오늘</span>
                        {/* <span className="text-base font-bold">[##_count_today_##]</span> */}
                        <span className="text-base font-bold">387</span>
                    </div>
                </div>
            </div>

            {/* 다크 모드 대응 */}
            <s_if_var_dark_mode_type>
                <Style
                    html={`  
        #sidebar {
            background-color: #111;
            color: #fff;
        }
        #sidebar a {
            color: #ccc;
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
