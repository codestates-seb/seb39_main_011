## 🏕 캠핑 예약 서비스 `BearMello` 🐻 🍡

> 📆 2022.09.08(Thurs) ~ 2022.10.12(Wed)

<br/>

## 👩‍💻🧑‍💻 Team - [seb39_11]

| FE     | BE     |
| ------ | ------ |
| 조영민 | 권예지 |
| 최수빈 | 배유진 |

<br/>

## 🫧 Dev Stack

| FE                 | BE       |
| ------------------ | -------- |
| `JavaScript`       | `Java`   |
| `React`            | `Spring` |
| `Styled-Component` | `AWS`    |
| `Redux`            | `MySQL`  |

<br/>

## ✋ Dev Rule

- 커밋 단위는 최대한 세세하게! 작은 부분 기능이라도 구현했으면 커밋하기!
- 되도록 작은 기능 커밋 후, pull -> push 바로 진행
- ✋ 부득이하게 코드 임시 저장인 stash 후에, 코드 pull 받기 (권장 X)

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
