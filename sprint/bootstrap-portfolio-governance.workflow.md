# 스프린트: 포트폴리오 GitHub 거버넌스 bootstrap

- 작업 슬러그: `bootstrap-portfolio-governance`
- 불변 계약: `sprint/bootstrap-portfolio-governance.workflow.json`
- 흐름: `bootstrap`
- 작업 branch: `chore/bootstrap-portfolio-governance`
- 대상 branch: `main`
- 기준 SHA: `d51932de86788d7be6264e1468edf509e51a3358`
- merge 방식: `merge`
- PR author/assignee: `JunSungKang`
- commit author: `JunSungKang <kjuns1@naver.com>`
- formal reviewer: `junsung-bot[bot]`
- co-authors: `junsung-bot[bot]`, `Codex`

## 1뎁스 스프린트: main 기반 단일 브랜치 거버넌스 설치

### 2뎁스 세부 작업: 저장소 정책과 trusted review check 설치

- 예상 변경 경로: `.github/codex-governance.json`, `.github/workflows/governance.yml`, `sprint/bootstrap-portfolio-governance.workflow.md`, `sprint/bootstrap-portfolio-governance.workflow.json`
- 변경 금지 경로: 포트폴리오 제품 파일과 기존 자동 생성 workflow
- 선행 조건: GitHub App이 현재 origin 저장소에 선택되어 있고 사람 GitHub 계정이 `JunSungKang`이어야 한다.
- 완료 기준: `main` 기반 PR만 허용하고, 동일 사람 PR author/assignee 및 App bot의 현재 head `APPROVED` 리뷰를 검증하는 trusted workflow가 설치된다.
- 검증 명령: plan validator, JSON/YAML 구문 검사, `git diff --check`
- 문서 경로: 이 계약과 `.github/codex-governance.json`

PR 번호, head SHA, review, check, merge 증적은 GitHub에서 조회하며 이 계약에 사후 기록하지 않는다.
