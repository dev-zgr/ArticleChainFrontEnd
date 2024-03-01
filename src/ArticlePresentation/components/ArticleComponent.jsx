import './ArticleStyles.css';

export const ArticleComponent = ({
                                     article_title,
                                     article_type,
                                     authors,
                                     article_resField,
                                     article_date,
                                     article_keywords,
                                     institution,
                                     department,
                                     abstract
                                 }) => {
    return (

        <div className="article">
            <p className="article--type">{article_type}</p>
            <p className="article--field">{article_resField}</p>
            <p className="article--date">{article_date}</p>
            <h3>{article_title}</h3>
            <strong>Authors: </strong>
            {authors.map((author, index) => {
                return (<>
                    <p className="article--authors">{`${author.title} ${author.author_name}`}</p>
                    <p className="article--from"><strong>from: </strong>{author.institution} {author.department} ,</p>
                </>)
            })}
            <p className="article--keyword"><strong>Keywords:</strong>{article_keywords}</p>
            <p className="article--abstract"><strong>Abstract:</strong>{abstract}</p>
        </div>

    )
}