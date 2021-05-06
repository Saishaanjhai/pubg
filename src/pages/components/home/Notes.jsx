import React from "react";
import Card from "@material-ui/core/Card";

export default function Note(props) {
    const{ notes } = props;
    if(!notes || notes.length === 0) {
        return <p className="mt-5">you haven't created any note yet.</p>
    } else {
        return (
            <>
             <h4 className="container">Your Note</h4> 
            <div className="container mt-4">
                <div className="card-columns">
                    {notes.map((note) => {
                        return (
                            <Card key={note.id} className="card p-3">
                                <h6 className="m-0">{note.note}</h6>
                            </Card>

                        );
                    })}
                </div>
            </div>
            </>
        );
    }
}