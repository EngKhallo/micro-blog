const Navigation = ({handleFilter, blogs}) => {
  return (
    <nav className="navbars filters">
      <button className="btn-all" onClick={()=> handleFilter(blogs.category = "Web" + "Mobile" + "Microservices") }>All Blogs</button>
      <button className="btn-web" onClick={()=> handleFilter(blogs.category = "Web") }>Web Dev</button>
      <button className="btn-mobile" onClick={()=> handleFilter(blogs.category = "Mobile") }>Mobile Dev</button>
      <button className="btn-services" onClick={()=> handleFilter(blogs.category = "Microservices") }>Microservices</button>
      
    </nav>
  );
};

export default Navigation;
