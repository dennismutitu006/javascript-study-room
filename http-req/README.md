Making http requests in node.js
Making HTTP requests in Node is one of the most important thing you would be doing as a developer and inasmuch as it is a simple to perform, there is still a lot to understand or probably be aware of. HTTP requests is all about transferring data over a network which is built on a client-server model.

The underlying technology is the HTTP (Hypertext Transfer Protocol) which is used to structure requests and responses over the Internet. It was originally designed to allow communication between web servers and web browsers with just sending html but its protocol is now used hugely for a variety of purposes. Well, our focus in this article is HTTP requests which is the protocol where a piece of data is requested from a server.

In this article, we will discuss more on HTTP, HTTP requests, ways to make this requests in Node and how we can handle errors.
Making a HTTP requests in Node is as important as anything and there are components we should consider to make a request in Node. The key specifications to describing how to make a HTTP request is in RFC 7230. The HTTP requests contains three elements which includes:

The request method which I called the components earlier.
The target, where the request is going to. This is usually the URL.
The protocol name and its version.
