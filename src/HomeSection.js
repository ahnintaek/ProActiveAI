import React from 'react';
import { AI_INPUT_VERSIONS } from './constants';

const HomeSection = ({ aiInput, setAiInput }) => {
  const handleInputToggle = (e) => {
    e.stopPropagation();
    setAiInput(AI_INPUT_VERSIONS.V2);
  };

  return (
      <main className='main_home'>
        <div className='homeSection' onClick={() => setAiInput('aiinputV1')}>
          <div className='homeSectionTop'>
            <h1 className="hometitle">안녕하세요. <span>김민준</span>님</h1>
            <p className="hometext">ProActive AI가 업무 흐름을 분석했습니다. 자연어로 요청하거나 추천 업무를 바로 실행하세요.</p>
            
            {aiInput === 'aiinputV2' && (
            <div className={`homeinputSectionV2 active`} onClick={(e) => e.stopPropagation()}>
              <textarea placeholder={'이번주 ERP 회계에서 미수금이 있는 거래처를 정리하고, ONEFFICE 보고서로 만들어줘'} className='AIInput'/>
              <hr/>
              <div className='v2inner'>
                <div className='v2innerLeft'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5F82ED"><path d="M40-440v-80h240v80H40Zm270-154-84-84 56-56 84 84-56 56Zm130-86v-240h80v240h-80Zm210 86-56-56 84-84 56 56-84 84Zm30 154v-80h240v80H680Zm-285 45q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm283 169-84-84 56-56 84 84-56 56Zm-396 0-56-56 84-84 56 56-84 84ZM440-40v-240h80v240h-80Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cccccc"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"/></svg>
                </div>
                <div className='v2innerRight'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cccccc"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm85-205Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm68.5-371.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z"/></svg>
                  <div className='line'></div>
                  <button type="button" className='aiModel'>Sarashina</button>
                  <button type="button" className='submitBtn'>전송→</button>
                </div>
              </div>
            </div>
            )}

            {aiInput === 'aiinputV1' && (
            <div 
              className={`homeinputSection active`} 
              onClick={(e) => {
                e.stopPropagation();
                setAiInput('aiinputV2');
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.stopPropagation();
                  setAiInput('aiinputV2');
                }
              }}
            >
              <input type="text" placeholder='무엇을 도와드릴까요?' id="" className='AIInput'/>
              <div className='flexrow'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cccccc"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#cccccc"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm85-205Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm68.5-371.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z"/></svg>
                <div className='line'></div>
                <button type="button" className='aiModel'>Sarashina</button>
                <button type="button" className='submitBtn'>전송→</button>
              </div>
            </div>
            )}

            <div className='shortcut'>
              <div className='shotcutTitle'>
                <svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 -960 960 960" width="12px" fill="#5F82ED"><path d="M40-440v-80h240v80H40Zm270-154-84-84 56-56 84 84-56 56Zm130-86v-240h80v240h-80Zm210 86-56-56 84-84 56 56-84 84Zm30 154v-80h240v80H680Zm-285 45q-35-35-35-85t35-85q35-35 85-35t85 35q35 35 35 85t-35 85q-35 35-85 35t-85-35Zm283 169-84-84 56-56 84 84-56 56Zm-396 0-56-56 84-84 56 56-84 84ZM440-40v-240h80v240h-80Z"/></svg>
                <span>ProActive AI 추천 메뉴 바로가기</span>
              </div>
              <div className='menuSection'>
                <div className="aimenu">
                  <p className="aiLabel aiTax">ERP 세무</p>
                  <p className="aiTitle">부가가치세 신고</p>
                </div>
                <div className="aimenu">
                  <p className="aiLabel aiAccount">ERP 회계</p>
                  <p className="aiTitle">거래처 미수금 현황</p>
                </div>
                <div className="aimenu">
                  <p className="aiLabel aiAccount">ERP 회계</p>
                  <p className="aiTitle">전자세금계산서 확인</p>
                </div>
                <div className="aimenu">
                  <p className="aiLabel aiOneffice">ONEFFICE</p>
                  <p className="aiTitle">매출 분석 보고서 작성</p>
                </div>
              </div>
            </div>
          </div>
          <div className='homeSectionBottom'>
            <div className="suggestArea">
              <p className="suggestAreaTitle"><span>●</span> ProActive 제안</p>
              <button type="button" className="moreBtn">더보기 &gt;</button>
            </div>
            <div className='suggestBoxSection'>
              <div className="suggestBox">
                <h2 className="suggestTitle">8월 세무신고 ㅡ D-3</h2>
                <p className="suggestDay">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#e3e3e3"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
                  마감일<span>2025.08.31</span>
                </p>
                <p className="suggesttext">부가가치세 신고가 3일 남았습니다.<br/>지금 확인하고 제출을 완료하세요.</p>
                <div className="moveArea">
                  <button type="button" className="activeBtn">처리하기→</button>
                  <button type="button" className="detailBtn">자세히보기 &gt;</button>
                </div>
              </div>
              <div className="suggestBox">
                <h2 className="suggestTitle">8월 매출 분석 리포트</h2>
                <p className="suggestDay">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#e3e3e3"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
                  마감일<span>2025.08.31</span>
                </p>
                <p className="suggesttext">
                  8월 매출이 전월 대비 12% 증가했어요.<br/>주요 성장 요인을 확인해보세요.
                </p>
                <div className="moveArea">
                  <button type="button" className="confirmBtn">확인하기→</button>
                  <button type="button" className="detailBtn">자세히보기 &gt;</button>
                </div>
              </div>
              <div className="suggestBox">
                <h2 className="suggestTitle">미확인 전자세금계산서 7건</h2>
                <p className="suggestDay">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ff6262ff"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm330.5-51.5Q520-263 520-280t-11.5-28.5Q497-320 480-320t-28.5 11.5Q440-297 440-280t11.5 28.5Q463-240 480-240t28.5-11.5ZM440-360h80v-200h-80v200Zm40-100Z"/></svg>
                  <span style={{color:'#ff6262ff'}}>확인필요</span>
                </p>
                <p className="suggesttext">
                  공급받은 전자세금계산서 7건이 확인되지 않았어요.
                </p>
                <div className="moveArea">
                  <button type="button" className="confirmBtn">확인하기→</button>
                  <button type="button" className="detailBtn">자세히보기 &gt;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
  );
};

export default HomeSection;