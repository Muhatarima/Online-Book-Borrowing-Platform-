
export async function GET() {
  const data =[
    { "id": 1, "title": "The Midnight Library", "author": "Matt Haig", "description": "A woman discovers a library between life and death.", "category": "Story", "available_quantity": 8, "image_url": "https://covers.openlibrary.org/b/id/10527843-M.jpg", "isNew": false },
    { "id": 2, "title": "Clean Code", "author": "Robert C. Martin", "description": "A handbook of agile software craftsmanship.", "category": "Tech", "available_quantity": 5, "image_url": "https://covers.openlibrary.org/b/id/8474631-M.jpg", "isNew": false },
    { "id": 3, "title": "A Brief History of Time", "author": "Stephen Hawking", "description": "An exploration of cosmology and black holes.", "category": "Science", "available_quantity": 10, "image_url": "https://covers.openlibrary.org/b/id/8739161-M.jpg", "isNew": false },
    { "id": 4, "title": "The Alchemist", "author": "Paulo Coelho", "description": "A shepherd travels from Spain to Egypt seeking treasure.", "category": "Story", "available_quantity": 14, "image_url": "https://covers.openlibrary.org/b/id/8739160-M.jpg", "isNew": false },
    { "id": 5, "title": "You Don't Know JS", "author": "Kyle Simpson", "description": "A deep dive into core JavaScript mechanisms.", "category": "Tech", "available_quantity": 7, "image_url": "https://covers.openlibrary.org/b/id/10901014-M.jpg", "isNew": true },
    { "id": 6, "title": "The Gene", "author": "Siddhartha Mukherjee", "description": "A sweeping history of the gene and heredity science.", "category": "Science", "available_quantity": 4, "image_url": "https://covers.openlibrary.org/b/id/9254396-M.jpg", "isNew": true },
    { "id": 7, "title": "To Kill a Mockingbird", "author": "Harper Lee", "description": "A young girl witnesses her father defend an innocent man.", "category": "Story", "available_quantity": 11, "image_url": "https://covers.openlibrary.org/b/id/8739167-M.jpg", "isNew": false },
    { "id": 8, "title": "Designing Data-Intensive Applications", "author": "Martin Kleppmann", "description": "A guide to building scalable and reliable data systems.", "category": "Tech", "available_quantity": 3, "image_url": "https://covers.openlibrary.org/b/id/10901015-M.jpg", "isNew": true },
    { "id": 9, "title": "The Selfish Gene", "author": "Richard Dawkins", "description": "Evolution best understood at the level of the gene.", "category": "Science", "available_quantity": 6, "image_url": "https://covers.openlibrary.org/b/id/8101459-M.jpg", "isNew": false },
    { "id": 10, "title": "Dune", "author": "Frank Herbert", "description": "A noble family fights for survival on a desert planet.", "category": "Story", "available_quantity": 9, "image_url": "https://covers.openlibrary.org/b/id/8739163-M.jpg", "isNew": false },
    { "id": 11, "title": "The Pragmatic Programmer", "author": "David Thomas & Andrew Hunt", "description": "Career-long advice for developers writing better software.", "category": "Tech", "available_quantity": 5, "image_url": "https://covers.openlibrary.org/b/id/8474630-M.jpg", "isNew": true },
    { "id": 12, "title": "Cosmos", "author": "Carl Sagan", "description": "A lyrical journey through the universe and humanity's place in it.", "category": "Science", "available_quantity": 12, "image_url": "https://covers.openlibrary.org/b/id/8739159-M.jpg", "isNew": true }
  ]
  return Response.json(data);
}