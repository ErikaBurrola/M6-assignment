window.addEventListener('load', () => {
    let btn = document.getElementById("empForm")
    btn.addEventListener('submit',(event) => {
        event.preventDefault(); 
        let id = document.getElementById("id").value;

        if (!/^\d{8}$/.test(id)) {
            alert("ID must be exactly 8 digits.");
            return; 
        }
        let name = document.getElementById("name").value;
        let ext = document.getElementById("ext").value;
        if (!/^\d{4}$/.test(ext)) {
            alert("Extension must be exactly 4 digits.");
            return; 
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let email = document.getElementById("email").value;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return; 
        }
        
        let department = document.getElementById("department").value;
        console.log(`ID: ${id}`);
        console.log(`Name: ${name}`);
        console.log(`Extension: ${ext}`);
        console.log(`Email: ${email}`);
        console.log(`Department: ${department}`);
    }, false)

})

