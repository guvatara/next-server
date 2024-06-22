import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <i className="ya ya-bar"></i>
                </button>
                <Link className="navbar-brand" href="/">Gameforest</Link>
            </div>
        </nav>
    )
}