## What are they

Self-sufficient tokens to change data securely using a JSON format

- **Self-contained**: carry inside of them the data necessary to be validated
- **Stateless**: We don't need to save anything on the database.
- **Multi-language**: Any language can interpret JSON

## Anatomy

- **Header**: Storage type of token and the algorithm used to generate the signature 
- **Payload**: Save the data of token (don't save sensible data and with more data, more weight to the payload)
- **Signature**: Guarantee that token was created from our application and was not changed


