import React from "react";

const RecipeComponent = (props) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={props.image} alt={props.title} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {props.title}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-action blue-text text-darken-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="blue-text text-darken-2"
            href={props.share}
          >
            Share Recipe
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="blue-text text-darken-2"
            href={props.url}
          >
            View Recipe
          </a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4 reveal-title">
            {props.title}
            <i className="material-icons right">close</i>
          </span>
          <p>
            <span className="ingredients-title">Ingredients</span>
            <ul className="collection">
              {props.ingredients.map((item) => (
                <li className="collection-item">{item}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;
