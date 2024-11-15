import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
  const { data } = useLoaderData();
  const news = data[0];
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="grid lg:grid-cols-12 gap-4 w-11/12 mx-auto my-8">
        <section className="lg:col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <div className="card bg-base-100 shadow-xl border-2">
            <figure className="p-8">
              <img src={news?.image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn btn-outline rounded-none"
                >
                  Back To Category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="lg:col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
