# Fortune Wheel Clone - Takeaway Challenge

A React + TypeScript implementation of the required landing screen, focusing on the spinner wheel and outcome popup. Built with Create React App.

## Demo
- Local: Run `yarn start` to view at http://localhost:3000.
- [GitHub Repo](https://github.com/MainaMwangiy/spin-wheel) (includes commit history for development process).

![Landing Page UI](<Landing Page UI.png>)
![Results After Spin](<Results After Spin.png>)
![Landing Page UI Mobile](<Landing Page Mobile.png>)

## Features Implemented
- **Landing Screen**: Interactive spinner wheel with 6 segments. Matches original colors (gold, red, yellow) and tiger theme.
- **Spinner Functionality**: Smooth CSS-based rotation animation with easing. Predetermined stopping point via `SPIN_OUTCOME` constant (0-5).
- **Outcome Popup**: Modal displays spin result (e.g., "You won 10x!") with close button. No other popups implemented as per spec.
- **Responsive**: Works on desktop/mobile.
- **Accessibility**: ARIA labels on segments, keyboard-navigable spin button.

## Tech Stack
- React 18 + TypeScript (strict mode enabled).
- CSS modules for styling (e.g., `Wheel.css`).
- No external UI libs—vanilla for lightness.
- Testing: Jest + React Testing Library (basic coverage in `App.test.tsx`).

## Setup & Run
1. Clone or unzip the project.
2. Install dependencies: `yarn install`.
3. Start dev server: `yarn start`.
4. Build for prod: `yarn build` (outputs to `/build`).

## Testing the Predetermined Outcome
Edit `src/constants.ts`:
```typescript
export const SPIN_OUTCOME = 2;