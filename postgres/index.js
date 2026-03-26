console.log('Starting Postgres embedding generation...');

for (let i = 0; i < 10; i++) {
    console.log(`Generating embedding ${i + 1}...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
}

console.log('Postgres embedding generation completed.');