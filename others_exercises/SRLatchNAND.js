class SRLatchNAND {
    q  = 0;
    qBar  = 1;

    nand(a, b) {
        return (!(a && b)); // Simula a porta NAND
    }

    setInput(s, r) {
        // Simula o comportamento do latch usando NANDs
        const newQ = this.nand(s, this.qBar);
        const newQBar = this.nand(r, newQ);

        // Atualiza os estados
        this.q = newQ;
        this.qBar = newQBar;
    }

    getOutput() {
        return this.q;
    }

    getInvertedOutput() {
        return this.qBar;
    }
}

// Teste do circuito
const latch = new SRLatchNAND();

console.log("Estado inicial: Q =", latch.getOutput(), "Q̅ =", latch.getInvertedOutput());

latch.setInput(1, 0); // S = 1, R = 0 → Set (Q = 1)
console.log("Após S=1, R=0: Q =", latch.getOutput(), "Q̅ =", latch.getInvertedOutput());

latch.setInput(0, 0); // S = 0, R = 0 → Mantém o estado
console.log("Após S=0, R=0: Q =", latch.getOutput(), "Q̅ =", latch.getInvertedOutput());

latch.setInput(0, 1); // S = 0, R = 1 → Reset (Q = 0)
console.log("Após S=0, R=1: Q =", latch.getOutput(), "Q̅ =", latch.getInvertedOutput());

latch.setInput(0, 0); // S = 0, R = 0 → Mantém o estado
console.log("Após S=0, R=0: Q =", latch.getOutput(), "Q̅ =", latch.getInvertedOutput());
