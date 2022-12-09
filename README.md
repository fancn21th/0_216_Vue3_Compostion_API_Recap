# Vue3 Composition API Recap

## 现代前端 Vue3 架构

- Vue3 Composition API

  - UI

    - Output / Presentation
    - Input / Form + Event Handler
    - State Management
      - Composable ( Based on Composition API)
      - Pinia ( App States )
        - App
          - Page
            - Component

  - Pattern

    - I/O (SFC) + State (Composable)
      - Two Files
      - Single File

  - APP
    - Vue Router
    - SFC tree

- Clean Code

  - layering

    - consistency comes first

    - level1

      - page
      - shared component
      - composable (i.e. vueuse wrapper)
      - provider/inject
      - layout
      - permission
      - utils

    - level2,3,4
      - nested layer
        - component > utils vs utils

- Ts

  - 学习成本高

  - 好处
    - 提高代码质量 从而提高交付效率
