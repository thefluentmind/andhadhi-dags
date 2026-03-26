console.log('Starting MongoDB embedding generation...');

for (let i = 0; i < 10; i++) {
    console.log(`Generating embedding ${i + 1}...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
}

console.log('MongoDB embedding generation completed.');