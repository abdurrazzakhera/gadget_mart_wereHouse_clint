import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className='container my-5'>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            DIFFERENC BETWEEN JAVASCRIPT AND NODE.JS?
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <h4>Javascript:</h4>
              <ul>
                <li>
                  JavaScript is a programming language that is writing scripts
                  on the website{" "}
                </li>
                <li>It can only be run in the browser</li>
                <li>JavaScript is basically used on the client-side</li>
                <li>JavaScript is used in frontend development</li>
                <li>
                  JavaScript is runnig any browser engine like
                  "Spider(firefox)", "V8(google)"
                </li>
              </ul>
            </div>
            <div>
              <h4>Node Js</h4>
              <ul>
                <li>Node Js is a JavaScript runtime enviroment</li>
                <li>
                  We can Run Javascript Out side the browser with the node.js
                </li>
                <li>It is mostly used on server-side</li>
                <li>Node js is used server-side development</li>
                <li>
                  Node js only run v8 engine which mainly used by google chorme
                </li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            DIFFERENCE BETWEEN SQL and NOSQL DATABASES.
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <h4>SQL:</h4>
              <ul>
                <li>SQL database are reletional</li>
                <li>
                  SQL databases use structured query language and have a
                  predefined schema
                </li>
                <li>SQL databases are table-based</li>
                <li> These databases are best suited for complex queries</li>
              </ul>
            </div>
            <div>
              <h4>NOSQL:</h4>
              <ul>
                <li>NoSQL database are non-relational</li>
                <li>
                  NoSQL database have dynamic schmas fro unstructured data.
                </li>
                <li>
                  NoSQL datebases are document,key-value,graph,or wide-column
                  stores
                </li>
                <li>These database are not so good for complex queries</li>
              </ul>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='2'>
          <Accordion.Header>
            <p className='text-uppercase'>
              when should you use nodejs and when should you use mongodb?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <div>
                <strong>Node Js</strong> is a JavaScript engine that can write
                any application that you want. It runs your Javascipt code.
                Mostly it used to build servers that cr respond to web requests.
                It also used for lots of other types of code too. Nodejs is such
                as tool for the of stand-alone program or server in JavaScript,
                then you can use nodejs for it
              </div>
              <div>
                <strong>MongoDB</strong>is actually a database engine. Code
                within some application or server uses MongoDB to save , query
                or update data in database. There are many web servers built
                with nodejs that will then use MongoDB for storing data. MongoDB
                offers an API library that runs within NodeJs application to
                give you programmatic access to MongoDB so you can create
                databases and then add, query ,update or delete data from the
                MongoDB database. MongoDB also has API libraries for other
                programming application like Python , Java etc. If your
                application needs the ability to persistently store data in a
                way that you cn efficiently query or update it later, then you
                would typically use some form of database. There has many of
                popular databases. MongoDB is one such database.
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
