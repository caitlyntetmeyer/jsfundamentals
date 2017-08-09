// Node.js Tutorial: Streams and Buffers

// Net Ninja Video #13: https://www.youtube.com/watch?v=GlybFFMXXmQ&index=13&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp

// Topic:
// How streams and buffers work, so that we're fully prepared to use them within our node application.

// Streams and buffers:
// 1) allow data to be consumed before it's fully downloaded
// 2) increase the performance of your app.

// Buffer - temp. storage spot for a chunk of data that's being transported
// Purpose: While data is being transferred, you can transfer just a little bit of data at a time...the buffer gets filled...and the data's delivered.

// Stream - data being passed on and processed
// Think about streaming movies online. You just need SOME of the chunks of data to be delivered, and then you can start watching the movie. You don't have to gather ALL of the data in memory first.

// Streams in Node.js:
// 1. Can create streams in Node.js to transfer data
// 2. Increase performance
