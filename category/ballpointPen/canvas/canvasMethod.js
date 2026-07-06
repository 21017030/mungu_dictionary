let canvas, ctx; // canvas: 캔버스 요소, ctx: 캔버스에 그림을 그리기 위한 도구(컨텍스트)
let isDrawing = false; // 현재 그리는 중인지 아닌지 (true: 그리는 중, false: 안 그리는 중)
let currentColor = 'rgb(0, 0, 0)'; // 현재 선택된 색상 (기본값: 검정)

// window.onload: 페이지가 완전히 로드된 후 실행
window.addEventListener("load", function() { //load 이벤트 리스너 등록 이걸 해야 앞에서 사용했던 window.onload() 함수가 덮어씌워지지 않는다.
    canvas = document.getElementById('drawing-canvas');
    ctx = canvas.getContext('2d');
});

// 그리기 시작 함수
function startDrawing(e) { // e: 마우스 이벤트 정보
    isDrawing = true; // 그리기 상태로 변경
    draw(e); // 클릭한 위치에 점 찍기 (바로 draw 함수 호출)
}

// 실제로 선을 그리는 함수
function draw(e) {
    if (!isDrawing) return; // 그리기 상태가 아니면 함수 종료
    
    // 캔버스 내에서의 마우스 좌표 계산
    const rect = canvas.getBoundingClientRect(); // 캔버스의 화면상 위치 정보 가져오기
    const x = e.clientX - rect.left; // 마우스 X좌표 - 캔버스 왼쪽 위치 = 캔버스 내 X좌표
    const y = e.clientY - rect.top; // 마우스 Y좌표 - 캔버스 위쪽 위치 = 캔버스 내 Y좌표
    
    // 선 스타일 설정
    ctx.lineWidth = 3; // 선 굵기 3px
    ctx.lineCap = 'round'; // 선 끝 모양을 둥글게
    ctx.strokeStyle = currentColor; // 선 색상을 현재 선택된 색상으로
    
    // 선 그리기
    ctx.lineTo(x, y); // 현재 위치에서 (x, y)까지 선 경로 추가
    ctx.stroke(); // 경로를 따라 실제로 선 그리기
    ctx.beginPath(); // 새로운 경로 시작 (이전 경로와 분리)
    ctx.moveTo(x, y); // 펜을 (x, y) 위치로 이동
}

// 그리기 중지 함수
function stopDrawing() {
    isDrawing = false; // 그리기 상태 해제
    ctx.beginPath(); // 경로 초기화 (다음 그리기를 위해)
}

// 색상 선택 함수
function selectColor(btn, color) { // btn: 클릭한 버튼, color: 해당 버튼의 색상값
    // 모든 색상 버튼에서 active 클래스 제거
    btns = document.getElementsByClassName('color-btn');
    for(let i=0; i<btns.length; i++){
        btns[i].classList.remove('active');
    }
    btn.classList.add('active'); // 클릭한 버튼에만 active 클래스 추가
    currentColor = color; // 현재 색상을 클릭한 버튼의 색상으로 변경
}

// 캔버스 전체 지우기 함수
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // (0,0)부터 캔버스 전체 크기만큼 지우기
}