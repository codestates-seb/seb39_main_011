## 🐻 캠핑장 예약 및 관리 서비스, `BearMello`  🏕

> 새로운 여가 문화로 각광받는 캠핑 시장을 신규로 체험해보는 캠핑족들, 기존에 캠핑을 꾸준히 즐겼던 이용자들 모두가 지역별로 예약가능한 캠핑장을 조회하고 간편히 캠핑장을 예약하고 이용할 수있는 서비스를 제공합니다 :>

🙈 관리자는 캠핑장 등록을, 이용객은 캠핑장 예약이 가능해요! <br/>
🙉 마이페이지 한 곳에서 캠핑장, 예약, 리뷰 등을 한번에 편리하게 관리할 수 있어요!


📆 개발 기간: 2022.09. ~ 2022.10. 약 4주 진행 (이후 틈틈이 리팩토링 진행-ing)

<br/>

## 👩‍💻🧑‍💻 Team Members

| 권예지 | 조영민 | 최수빈 |
|:-:|:-:|:-:|
| <img src="https://avatars.githubusercontent.com/u/77970912?v=4" width=150px/> | <img src="https://avatars.githubusercontent.com/u/85497694?v=4" width=150px/> | <img src="https://avatars.githubusercontent.com/u/64299610?v=4" width=150px/> |
| [@kwonyeji500](https://github.com/kwonyeji500) | [@0miiii](https://github.com/0miiii) | [@Beanxx](https://github.com/Beanxx) |
| Back-end | Front-end | 팀장, Front-end |

<br/>

## 💫 Demo


| **회원가입** | **로그인** |
|:-:|:-:|
| ![회원가입](https://user-images.githubusercontent.com/64299610/206495870-88d72702-f52a-4aa9-9a6d-570587e8adf0.gif) | ![로그인](https://user-images.githubusercontent.com/64299610/206497080-9c86c069-076c-4721-b2ef-5f593a4b8a9a.gif) |
| **[관리자] 캠핑장 글 등록 및 관리** | **[관리자] 캠핑장 예약 관리 및 예약 취소** |
| ![글등록](https://user-images.githubusercontent.com/64299610/206499223-a6a49ea3-be43-4399-83e1-fd2f2349d336.gif) | ![관리자 예약](https://user-images.githubusercontent.com/64299610/206515891-9f9a2260-d33c-4afb-ae10-236166d1f48d.gif) |
| **[관리자] 캠핑장 리뷰 댓글 관리** | **[고객] 캠핑장 예약 및 예약 취소** |
| ![관리자 리뷰댓글](https://user-images.githubusercontent.com/64299610/206517742-9d64fb91-8741-481b-ab7d-66f8da092299.gif) | ![고객 예약](https://user-images.githubusercontent.com/64299610/206513390-cf87b3c1-ebee-4321-a17e-2faebdb53a09.gif)
| **[고객] 이전 예약 조회 및 리뷰 달기** |  **[고객] 리뷰 관리** |
| ![고객 리뷰 달기](https://user-images.githubusercontent.com/64299610/206519381-03b1389e-c247-4856-a3ea-f6eeb68197b8.gif) | ![고객 리뷰 관리](https://user-images.githubusercontent.com/64299610/206517227-59af32b4-d81b-4c5b-a432-1e82388a77fe.gif) |
| **상세페이지 캠핑장 정보 & 후기 조회** | **회원 정보 조회 및 수정** |
| ![detail page](https://user-images.githubusercontent.com/64299610/206514593-1041a28e-3181-41ca-93a1-2582a04d27b3.gif) | ![userinfo](https://user-images.githubusercontent.com/64299610/206514178-eb883725-da42-47e7-856d-4da9ae729ecf.gif) |
| **게시물 정렬 기능** | **반응형 페이지** |
| ![정렬](https://user-images.githubusercontent.com/64299610/206515058-30c5c078-c37c-4237-842a-74bb80428031.gif) | ![반응형](https://user-images.githubusercontent.com/64299610/206523776-a4783f93-8e96-499f-b7c8-afb6a9da4acc.gif) |


<br/>

## 🛠 Tech Stack

![teck_stack](https://user-images.githubusercontent.com/64299610/206486678-3d7f1b35-5a52-404f-afe4-ef2bf4aa0328.png)


<br/>

## ✋ Dev Rule

- 커밋 단위는 최대한 세세하게! 작은 부분 기능이라도 구현했으면 커밋하기!
- 되도록 작은 기능 커밋 후, pull -> push 바로 진행
- ❗️ 부득이하게 코드를 임시 저장해야 하는 경우, stash한 후에 pull 받기 (But, 권장 X)

```
  # 일반적인 commit & push 과정
  1. git add .
  2. git commit -m 'feat: 로그인 유효성 검사 구현'
  3. git pull origin dev
  4. git push origin [mybranch]
  5. github repository에서 dev로 PR 보내고, merge하기

  # 코드 임시저장 후 pull 받는 방법
  git stash # 수정한 코드를 임시저장소에 임시저장
  git pull origin dev
  git stash pop # pull받은 코드에 아까 임시저장했던 코드를 꺼내옴
```

- git pull 후에 코드 수정을 하고 push할 경우 한번 더 add, commit 진행

```
  # pull한 후 코드 수정 사항 있을 경우에만
  - (git add .)
  - (git commit -m 'fix: 회원가입 로직 수정')
```

- push는 무조건 자기 브랜치로 한 후, github에서 PR로 dev에 merge

```
  git push origin [mybranch]
```

- 각자 이름 브랜치에서 dev로 PR 보내기
- dev로 보낸 PR 충돌 없는지 확인 후에, dev로 merge하기

<br/>

## 📨 Commit Message Convention

| Tag Name | Description                                           |
| -------- | ----------------------------------------------------- |
| feat     | 새로운 기능을 추가할 경우                             |
| fix      | 버그를 고친 경우                                      |
| design   | CSS 등 사용자 UI 디자인 변경                          |
| style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| chore    | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우   |
| refactor | 코드 리팩토링                                         |
| comment  | 필요한 주석 추가 및 변경                              |
| docs     | 문서를 수정한 경우                                    |
| test     | 테스트 추가, 테스트 리팩토링                          |
| rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
| remove   | 파일을 삭제하는 작업만 수행한 경우                    |

<br/>

## 📑 Docs

- [🔗 요구사항 명세서](https://docs.google.com/spreadsheets/d/1wt6KmpZkLAck35G9nEQd89tNI7O04zmCPmNwwueId7o/edit#gid=928874266)
- [🔗 화면 정의서](https://www.notion.so/42473629698645778f924b7108fb8103?v=280995dada754f7984ff16748f63b9de)
- [🔗 API 명세서](https://www.notion.so/codestates/API-DOCS-41d49666e8de474bbffa0b0022c97758)
- [🔗 User Flow](https://miro.com/app/board/uXjVPYddnww=/)
- [🔗 Figma](https://www.figma.com/file/5v6mAPyrOf5PxnGVJCrVW5/BearMello_Design?node-id=12%3A2569)
