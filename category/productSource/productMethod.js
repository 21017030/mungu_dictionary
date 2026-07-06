 function selectProduct(btn , imageLink){
            let buttons = document.getElementsByClassName("select-button");
            for(let i=0; i<buttons.length; i++){
                buttons[i].classList.remove("selected"); //classList: 해당 요소가 가지고 있는 클래스들의 집합에 접근(모든 버튼의 selected 클래스 삭제)
            }
            btn.classList.add("selected"); //선택된 버튼에 selected 클래스 추가
            document.getElementById("show").src=imageLink; //이미지 변경
        }