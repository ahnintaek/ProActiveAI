import React from 'react';
import { mockPosts } from './boardData';

const BoardSection = ({ currentPage, setCurrentPage }) => {
  // 필터링 상태 (all, my, memo, notice, important)
  const [filter, setFilter] = React.useState('all');

  // 필터링 로직
  const filteredPosts = mockPosts.filter(post => {
    if (filter === 'all') return true;
    if (filter === 'my') return post.isMy;
    if (filter === 'important') return post.isImportant;
    return post.category === filter;
  });

  return (
    <main className='main_board'>
      <div className="boardArea">
        <h1 className="boardTitle">게시판</h1>
        <p className="boardCaption">공지사항과 회람을 빠르게 확인하고 필요한 업무를 처리할 수 있습니다.</p>
        <div className="boardBtnSerction">
          <div className="boardList">
            <button type='button' className={`boardType all ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>전체</button>
            <button type='button' className={`boardType my ${filter === 'my' ? 'active' : ''}`} onClick={() => setFilter('my')}>내 관련</button>
            <button type='button' className={`boardType memo ${filter === 'memo' ? 'active' : ''}`} onClick={() => setFilter('memo')}>회람</button>
            <button type='button' className={`boardType notice ${filter === 'notice' ? 'active' : ''}`} onClick={() => setFilter('notice')}>공지</button>
            <button type='button' className={`boardType important ${filter === 'important' ? 'active' : ''}`} onClick={() => setFilter('important')}>중요</button>
            <button type='button' className='boardType filter'>
              <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000000"><path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Zm40-308 198-252H282l198 252Zm0 0Z"/></svg>
              필터</button>
          </div>
          <button type='button' className="newBoard">+ 글쓰기</button>
        </div>
        <div className="boardSection">
          <div className="boardSectionCard">
            <div className="boardSectionCardTitle">
              <p className="boardCard Today"><span>오늘 확인이 필요한 항목</span></p>
              <p className="boardCard Unknown">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#237bff"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                <span>미확인 회람 4건</span></p>
              <p className="boardCard My">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffa13d"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                <span>내 관련 공지 2건</span></p>
              <p className="boardCard Deadline">
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ff2626"><path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                <span>마감 임박 회람 1건</span></p>
            </div>
            <div className='boardPostSection'>
              {filteredPosts.map(post => (
                <div className="boardPost" key={post.id}>
                  <div className={`boardLabel ${post.category}`}><span>{post.labelText}</span></div>
                  <div className="boardContentArea">
                    <h3 className="boardContentTitle">{post.title}</h3>
                    <p className="boardContent">{post.content}</p>
                    <div className="boardInfo">
                      <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#000000"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/></svg>
                      <span className="boardInfoName">{post.author}</span>
                      <span className="boardInfoPosition">{post.team}</span>
                      <span className="boardInfoDate">{post.date}</span>
                      <p className="boardInfoView">
                        <svg xmlns="http://www.w3.org/2000/svg" height="11px" viewBox="0 -960 960 960" width="11px"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z"/></svg>
                        <span>{post.views}</span></p>
                      <p className="boardInfoComment">
                        <svg xmlns="http://www.w3.org/2000/svg" height="11px" viewBox="0 -960 960 960" width="11px"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                        <span>{post.comments}</span></p>
                    </div>
                  </div>
                  <div className='postMoveArea'>
                    <button type="button" className="postMove">{post.moveBtn}</button>
                  </div>
                </div>
              ))}
            </div>
            <div className='boardPostMore'>
              <button type='button' className='boardPostMoreBtn'>더보기 
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 800" width="18px" fill="#aaaaaa"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
              </button>
            </div>
          </div>
          <div className="boardSectionPannel">
            <div className="pannelArea">
              <div className="pannelAssistantTitle">
                <p className='assistantTitle'>AI Assistant</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#aaaaaa"><path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </div>
              <div className="assistantSection">
                <span className="assistantName notreadMemo">
                  <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 -960 960 960" width="13px" fill="#e3e3e3"><path d="M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z"/></svg>
                  미확인 회람</span>
                <span className="assistantNum notreadMemo">4건</span>
              </div>
              <div className="assistantSection">
                <span className="assistantName deadlinMemo">
                  <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 -960 960 960" width="13px" fill="#e3e3e3"><path d="M444-384v-336h72v336h-72Zm0 144v-72h72v72h-72ZM240-48H120q-33 0-52.5-19.5T48-120v-120h72v120h120v72Zm480 0v-72h120v-120h72v120q0 33-19.5 52.5T840-48H720ZM48-720v-120q0-33 19.5-52.5T120-912h120v72H120v120H48Zm792 0v-120H720v-72h120q33 0 52.5 19.5T912-840v120h-72Z"/></svg>
                  마감 임박 회람</span>
                <span className="assistantNum deadlinMemo">1건</span>
              </div>
              <div className="assistantSection">
                <span className="assistantName newMemo">
                  <svg xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 -960 960 960" width="13px" fill="#e3e3e3"><path d="M96-528q0-88 35.5-162T230-818l51 50q-52 43-82.5 105.5T168-528H96Zm696 0q0-73-30.5-135.5T678-769l52-51q62 53 98 128.5T864-528h-72ZM192-216v-72h48v-240q0-87 53.5-153T432-763v-53q0-20 14-34t34-14q20 0 34 14t14 34v53q85 16 138.5 82T720-528v240h48v72H192Zm288-276Zm0 396q-30 0-51-21t-21-51h144q0 30-21 51t-51 21ZM312-288h336v-240q0-70-49-119t-119-49q-70 0-119 49t-49 119v240Z"/></svg>
                  신규 공지</span>
                <span className="assistantNum newMemo">2건</span>
                </div>
              <button type="button" className='pannelMoreBtn'>모두 확인하기</button>
              <button type="button" className='assistantAIBtn'>AI에게 물어보기→</button>
            </div>
            <div className="pannelArea">
              <div className="pannelAssistantTitle">
                <p className='assistantTitle'>이달의 회람 현황</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#aaaaaa"><path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </div>
              <div className="pannelMemograph">
                <div className="memoGraphArea">
                  <div className="memoGraph">
                  </div>
                  <p className="graphText">전체<span>26</span>건</p>
                </div>
                <div className="memoColumn">
                  <span className="memoColumnText">
                    <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 850" width="10px" fill="#6CC26B"><path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/></svg>
                    완료<span>12 (50%)</span></span>
                  <span className="memoColumnText">
                    <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 850" width="10px" fill="#5F82ED"><path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/></svg>
                    진행 중<span>8 (33%)</span></span>
                  <span className="memoColumnText">
                    <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 850" width="10px" fill="#DE7A36"><path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/></svg>
                    미확인<span>4 (17%)</span></span>
                  <span className="memoColumnText">
                    <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 850" width="10px" fill="#D2524B"><path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Z"/></svg>
                    만료<span>2 (8%)</span></span>
                </div>
              </div>
              <button type="button" className='pannelMoreBtn'>상세 보기</button>
            </div>
            <div className="pannelArea">
              <div className="pannelAssistantTitle">
                <p className='assistantTitle'>인기 게시글</p>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#aaaaaa"><path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
              </div>
              <div className="poppularPostArea">
                <div className="pannelPost"><span className="pannelPostNum top">1</span><span className="pannelPostTitle">2026년 상반기 마케팅 전략 공유</span><span className="pannelPostView">1,234</span></div>
                <div className="pannelPost"><span className="pannelPostNum top">2</span><span className="pannelPostTitle">근무시간 변경 안내 (유연근무제)</span><span className="pannelPostView">987</span></div>
                <div className="pannelPost"><span className="pannelPostNum top">3</span><span className="pannelPostTitle">정보보안 교육 필수 이수 안내</span><span className="pannelPostView">856</span></div>
                <div className="pannelPost"><span className="pannelPostNum middle">4</span><span className="pannelPostTitle">업무 효율을 높이는 AI 도구 가이드</span><span className="pannelPostView">723</span></div>
                <div className="pannelPost"><span className="pannelPostNum middle">5</span><span className="pannelPostTitle">팀워크 향상 프로그램 참가자 모집</span><span className="pannelPostView">641</span></div>
                <div className="pannelPost"><span className="pannelPostNum low">6</span><span className="pannelPostTitle">사무실 냉난방 기기 구매 요청 회람</span><span className="pannelPostView">589</span></div>
                <div className="pannelPost"><span className="pannelPostNum low">7</span><span className="pannelPostTitle">사내 카페 신규 메뉴 투표 이벤트</span><span className="pannelPostView">521</span></div>
              </div>
              <button type="button" className='pannelMoreBtn'>더보기</button>
            </div>            
          </div>
        </div>
      </div>
    </main>
  )};

export default BoardSection;