export default function Custom404() {
  return (
    <div className="wrapper">
      <h1>404 | Page Not Found</h1>
      <style jsx>{`
        .wrapper {
          width: 100%;
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        h1 {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
}
