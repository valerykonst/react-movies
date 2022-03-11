function Footer() {
    let date = new Date();
    return  <footer className="page-footer indigo">
    <div className="footer-copyright">
      <div className="container">
      © Copyright {date.getFullYear()} Movies
      </div>
    </div>
  </footer>;
}

export { Footer };
