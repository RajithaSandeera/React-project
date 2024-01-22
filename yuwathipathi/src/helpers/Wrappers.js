
export const Wrapper = styled.div`
  position: fixed;
  top: -60px;
  animation: enter-leave 3s ease-in-out;
  left: calc(50% - 300px);
  width: 600px;
  height: 42px;
  @keyframes enter-leave {
    0% {
      top: -60px;
    }
    7.5% {
      top: 16px;
    }
    92.5% {
      top: 16px;
    }
    100% {
      top: -60px;
    }
  }`;