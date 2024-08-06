import useFetch from "../../hooks/useFetch"
import "./featured.css"

const Featured2 = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Bristol,Cardiff,Edinburgh");

    return (
        <div className="featured2">
            {loading ? (
                "Loading"
            ) : (
                <>
                <div className="featuredItem2">
                <img
                    src="https://www.intltravelnews.com/sites/default/files/20200317msrse-b.jpg"
                    alt=""
                    className="featuredImg2"
                />
                <div className="featuredTitles2">
                    <h1> Bristol</h1>
                    <h2> {data[0]} Hotels</h2>
                </div>
                </div>
                <div className="featuredItem2">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vJXPaI06yuz7sC6WzJGfEQBpMMF3-1xgOw&s"
                        alt=""
                        className="featuredImg2"
                    />
                    <div className="featuredTitles2">
                        <h1> Cardiff</h1>
                        <h2> {data[1]} Hotels</h2>
                    </div>
                </div>
                <div className="featuredItem2">
                    <img
                        src="https://th.bing.com/th/id/OIP.QEiwrDDVB8uI9BNyP-XKDQHaE8?rs=1&pid=ImgDetMain"
                        alt=""
                        className="featuredImg2"
                    />
                    <div className="featuredTitles2">
                        <h1> Edinburgh</h1>
                        <h2> {data[2]} Hotels</h2>
                    </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Featured2;