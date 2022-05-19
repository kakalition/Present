User Model:
1. ID (one)
2. Name (one)
3. Profile pic path (one)
4. Saved Meditation (many)
5. Saved Breathing (many)
6. History (many)

Saved Meditation Model:
1. ID (one)
2. User ID (one)
3. Marketplace Meditation ID (one)

Saved Breathing Model:
1. ID (one)
2. User ID (one)
3. Marketplace Breathing ID (one)

History Model: 
1. ID (one)
2. User ID (one)
3. Date (one)
4. Name (one)
5. Type (one)

Marketplace Meditation Model: 
1. ID (one)
2. Path (one)
3. Short description (one)
4. Author name (one)
5. Published date (one)
6. Total saved (one)
7. Comment (many)

Marketplace Breathing Model:
1. ID (one)
2. Duration data in JSON (one)
3. Short description (one)
4. Author name (one)
5. Published date (one)
6. Total saved (one)
7. Comment (many)

Comment Model:
1. ID (one)
2. User ID (one)
3. Date (one)
4. Comment string (one)
5. Rating (one)