---
# ==============================================================================
# 포트폴리오 데이터 설정 파일 (index.md)
# 
# 이 파일의 내용을 수정하면 포트폴리오 웹사이트(index.html)에 자동으로 반영됩니다.
# 각 항목의 주석(#)을 참고하여 내용을 입력해주세요.
# ==============================================================================

# 마지막 업데이트 날짜 (형식: YYYY.MM.DD)
last_updated: "2025.12.08"

# ------------------------------------------------------------------------------
# 1. 프로필 (Profile) - 인적 사항 및 기본 소개
# ------------------------------------------------------------------------------
profile:
  name_ko: "강준성"
  name_en: "Kang Junsung"
  title_en: "Junsung Kang" # 상단 타이틀 등에 표시될 영문 이름
  role: "Backend & AI Engineer / Frontend Engineer" # 직무/역할
  birth: "1992. 02. 06"
  education: "한양대학원 블록체인융합학과 (석사)" # 최종 학력 요약
  
  # 핵심 역량/강점 (3가지)
  # 강조하고 싶은 부분은 **내용** 처럼 별표 2개로 감싸주세요.
  strengths:
    - "끊임없이 기술을 배우고 익히는 자세"
    - "도전과 개선에 대한 태도"
    - "다양한 환경에서의 리더십 및 협업 경험"

# ------------------------------------------------------------------------------
# 2. 소개 문구 (Introduction)
# ------------------------------------------------------------------------------
introduction:
  # 메인 화면에 타이핑 효과로 나타날 좌우명
  quote: '"긍정적인 사람은 한계가 없고, 부정적인 사람은 한 게 없다."'
  # 좌우명 아래에 표시될 상세 소개글
  desc: "매사에 긍정적인 태도로 기술의 한계에 도전하며 끊임없는 성장을 이루고 있습니다."

# ------------------------------------------------------------------------------
# 3. 기술 스택 (Skills)
# ------------------------------------------------------------------------------
skills:
  # 주요 기술 (Main)
  main:
    languages: ["Java", "TypeScript", "JavaScript", "HTML/CSS"]
    frameworks: ["Spring Boot", "Nuxt", "Angular", "Next"]
  
  # 서브 기술 (Sub)
  sub:
    languages: ["C++", "C#", "Solidity", "Python", "React", "Vue"]
    frameworks: ["Svelte", "Ethereum", "MFC"]

# ------------------------------------------------------------------------------
# 4. 학력 (Education)
# ------------------------------------------------------------------------------
education:
  - degree: "석사"
    school: "한양대학교 대학원"
    major: "블록체인융합학과"
    period: "2019 – 2021"
    thesis_label: "석사 논문"
    thesis_title: "스마트 컨트랙트 기반 파일 관리 시스템"
    thesis_link: "https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=1c27fe9fcb321876ffe0bdc3ef48d419"

  - degree: "학사"
    school: "한국교통대학교"
    major: "컴퓨터정보공학과"
    period: "2010 – 2016"
    thesis_label: "학사 논문"
    thesis_title: "문자인식기능을 이용한 기계번역 모바일앱 개발"
    thesis_link: "https://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=1ba5001adfb7f47747de9c1710b0298d"

# ------------------------------------------------------------------------------
# 5. 경력 (Career)
# - 최신순으로 입력하는 것을 권장합니다.
# ------------------------------------------------------------------------------
career:
  # [1] 와이즈넛 (현재)
  - company: "와이즈넛 (Wisenut)"
    is_current: true # 현재 재직 중이면 true, 아니면 false
    team: "연구소 RAG TF팀 / AI어댑티드솔루션팀"
    period: "2024.09 – PRESENT"
    projects:
      - name: "RAG 솔루션 개발"
        tech: "Java21, SpringBoot 3, Nuxt3, PostgreSQL"
        # result 항목은 | 기호를 사용하여 여러 줄로 입력할 수 있습니다.
        # 줄바꿈을 하려면 그냥 엔터를 치면 됩니다. (<br> 태그 불필요)
        result: |
          - RAG 솔루션 릴리즈 완료
          - 생성형 AI 기반 아키텍처 설계
          - QA 협업 및 빠른 성장
      - name: "통합관리도구 웹 개발"
        tech: "NodeJS, Next, PostgreSQL"
        result: |
          - 기존 사내 제품의 개별적으로 분리되어있던 관리도구를 하나의 웹으로 통합
          - 최소한의 서버 자원을 위한 웹 설계
      - name: "인증기 모듈 개발"
        tech: "Java21, SpringBoot 4, PostgreSQL"
        result: |
          - 기능 통합을 위한 기획부터 설계, 개발, 단위테스트, 배포까지 프로젝트 전체 리딩
          - 기존 사내 모든 제품의 라이센스, 계정, API키 관리등 모든 인증/인가 관련 기능 통합

  # [2] 브랜비
  - company: "브랜비 (Branby)"
    is_current: false
    team: "SI 개발 1팀"
    period: "2023.10 – 2024.09"
    projects:
      - name: "삼성전자 DS ALM"
        tech: "Polarion ALM, Java8, MySQL, JS"
        result: |
          - ALM 1차 오픈
          - 고객사 대응 및 성능 이슈 해결

  # [3] 와이즈넛 (과거)
  - company: "와이즈넛 (Wisenut)"
    is_current: false
    team: "연구소 X-Search팀 / 융합기술연구팀 / AI 플랫폼팀"
    period: "2018.07 – 2023.10"
    projects:
      - name: "다크데이터 분석"
        tech: "SpringBoot, Nuxt3, PostgreSQL, Airflow"
        result: "2차년도 개발 완료"
      - name: "이종 데이터 증식"
        tech: "Python, ConceptNet"
        result: "최우수 과제 선정"
      - name: "크로스 모델 통합"
        tech: "SpringBoot, Wayang, MySQL"
        result: "팀 리딩 경험"
      - name: "Search-Formular1"
        tech: "C++, Java17, Lucene"
        result: "검색엔진 고도화"
      - name: "Infofinder"
        tech: "MFC, IE Engine"
        result: "보안 우회 구현"
      - name: "보안 관제 플랫폼"
        tech: "SpringBoot, ElasticSearch"
        result: "KISTI 기술이전"

  # [4] 코인빈
  - company: "코인빈 (Coinbin)"
    is_current: false
    period: "2018.03 – 2018.06"
    projects:
      - name: "ISMS-P 인증 준비 (AWS, Firewall) - 내부 심사 대응"

  # [5] 에임시스템
  - company: "에임시스템 (Aim Systems)"
    is_current: false
    period: "2015.11 – 2018.02"
    projects:
      - name: "MES/RMS/SPC 웹 플랫폼 (SpringBoot, Angular, MongoDB) - 대기업 공장 시스템 구축"

# ------------------------------------------------------------------------------
# 6. 타임라인 (Timeline)
# - 연혁을 최신순으로 기록합니다.
# ------------------------------------------------------------------------------
timeline:
  - date: "2024.09 - ing"
    title: "와이즈넛 재입사"
    desc: "RAG 기반 생성형 AI 솔루션 개발"
  - date: "2023.10 - 2024.08"
    title: "브랜비 입사"
    desc: "삼성전자 ALM 프로젝트 참여"
  - date: "2019.03 - 2021.02"
    title: "한양대학교 석사"
    desc: "블록체인융합학과 졸업"
  - date: "2018.07 - 2023.09"
    title: "와이즈넛 입사"
    desc: "검색엔진, 보안관제, AI 플랫폼 개발"
  - date: "2018.03 - 2018.06"
    title: "코인빈 입사"
    desc: "보안/인프라 담당"
  - date: "2015.11 - 2018.02"
    title: "에임시스템 입사"
    desc: "MES, RMS 웹 플랫폼 개발"
  - date: "2010.03 - 2016.02"
    title: "한국교통대학교 입학"
    desc: "컴퓨터정보공학과"
---
# 주의: 이 파일은 데이터 정의용입니다. 
# 내용은 위쪽의 YAML Frontmatter ( --- 사이의 내용 ) 부분만 수정해주세요.
