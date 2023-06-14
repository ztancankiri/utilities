function levenshteinDistance(string1, string2) {
	const m = string1.length;
	const n = string2.length;

	const matrix = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

	for (let i = 0; i <= m; i++) {
		matrix[i][0] = i;
	}

	for (let j = 0; j <= n; j++) {
		matrix[0][j] = j;
	}

	for (let i = 1; i <= m; i++) {
		for (let j = 1; j <= n; j++) {
			const cost = string1[i - 1] !== string2[j - 1] ? 1 : 0;
			matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + cost);
		}
	}

	return matrix[m][n];
}

function calculateSimilarityPercentage(string1, string2) {
	const distance = levenshteinDistance(string1, string2);
	const maxLength = Math.max(string1.length, string2.length);
	const similarityPercentage = ((maxLength - distance) / maxLength) * 100;
	return similarityPercentage.toFixed(2);
}
