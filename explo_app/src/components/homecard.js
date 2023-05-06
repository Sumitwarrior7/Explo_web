import React from "react";

const HorizontalCard = () => {
    return (
        <div className="mx-5 my-3"
            style={{display: "flex", flexDirection: "row", width: "60%", borderRadius: "5px", boxShadow: "2px 2px 10px #cccccc",}}>
            <div style={{width: "60%"}}>
                <img src="https://via.placeholder.com/300x200" alt="placeholder" style={{width: "100%", height: "auto",}}/>
            </div>

            <div className="px-4 py-4 text-center" style={{ width: "40%", display: "flex", flexDirection: "column", justifyContent:"space-between" }}>
                <h3 style={{}}>Heading</h3>
                <p style={{}}>
                    Devices :<span>5</span>
                </p>
                <button style={{backgroundColor: "#4caf50", color: "#fff",padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer"}}>Learn More</button>
            </div>
        </div>
    );
};

export default HorizontalCard;