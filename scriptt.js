function showResult(result) {
    const resultMessage = document.getElementById('resultMessage');
    if (result === 'win') {
        resultMessage.textContent = 'Congratulations! You won the match!';
        resultMessage.style.color = '#28a745';
    } else {
        resultMessage.textContent = 'Sorry, you lost the match.';
        resultMessage.style.color = '#dc3545';
    }
}
