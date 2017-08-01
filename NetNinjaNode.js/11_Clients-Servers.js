/*
Net Ninja Node.js - Clients and Servers

Video 11: https://www.youtube.com/watch?v=qSAze9b0wrY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&t=2#t=3.446383

protocol - set of communication rules that 2 sides agree on when they communicate w/each other.
Ex: An Italian and a German agree to speak in English when they talk to each other.

Background info:
A client has its own IP address. A server has its own IP address.

To communicate btwn client and server:
1) Open a socket between the client and server
2) Decide on the structure of the info being sent (ex: HTTP or FTP)
3) Use the protocl TCP to split the data into packets (smaller bits of info) and transfer them along the socket

Ports:
A program running on a computer can listen for requests sent to a particular PORT NUMBER. Ex: 172.24.86.76:3000 (ipAddress:portNumber)
*/
