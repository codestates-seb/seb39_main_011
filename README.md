seb39_pre_11

## Main Project - 🏕 캠핑 예약 서비스 사이트

> 📆 2022.09.08(Thurs) ~~ 2022.10.12(Wed)
> <br/>

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

- 자신의 브랜치가 dev에서 최신 코드가 아닐 경우 git pull 받기
- git pull하기 전엔 무조건 add, commit 진행

```
  1. git add .
  2. git commit -m 'feat: 로그인 유효성 검사 구현'
  3. git pull origin dev
```

- git pull 후에 코드 수정을 하고 push할 경우 한번 더 add, commit 진행

```
  # pull한 후 코드 수정 사항 있을 경우에만
  4. (git add .)
  5. (git commit -m 'fix: 회원가입 로직 수정')
```

- push는 무조건 자기 브랜치로 한 후, github에서 PR로 dev에 merge

```
  6. git push origin [mybranch]
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
| refactor | 코드 리팩토링                                         |
| comment  | 필요한 주석 추가 및 변경                              |
| docs     | 문서를 수정한 경우                                    |
| test     | 테스트 추가, 테스트 리팩토링                          |
| chore    | 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우   |
| rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
| remove   | 파일을 삭제하는 작업만 수행한 경우                    |
