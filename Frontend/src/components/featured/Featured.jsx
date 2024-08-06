import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Aberdeen,Nottingham,London");


    return (
        <div className="featured">
            {loading ? (
                "Loading"
            ) : (
                <>
                <div className="featuredItem">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoJEGtF6R35RioDKQSDFL5v8IdHZHuRx4_Q&s"
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1> Aberdeen</h1>
                    <h2> {data[0]} Hotels</h2>
                </div>
                </div>
                <div className="featuredItem">
                    <img
                        src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1> Nottingham</h1>
                        <h2> {data[1]} Hotels</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxOFDN4cwaj8d_JeVIZlndMyPMK3S2il37Q&s"
                        alt=""
                        className="featuredImg"
                    />
                    <div className="featuredTitles">
                        <h1> London</h1>
                        <h2> {data[2]} Hotels</h2>
                    </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Featured;