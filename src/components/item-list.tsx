import React from "react"

export default function ItemList(){
    return(
        <div className="itemlist-container">
            <div className="itemlist-body">
                
            </div>
            <div className="itemlist-footer">
                <div className="itemlist-footer-info">
                    5 items left
                </div>
                <div className="itemlist-footer-status">
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                </div>
                <div className="itemlist-footer-actions">
                    <button type="button">Clear Completed</button>
                </div>
            </div>
        </div>
    )
}