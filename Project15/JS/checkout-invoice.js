let invoice = document.querySelector('.checkout-invoice_main .invoice');
let e_invoice = invoice.querySelector(".e_invoice");
let paper_invoice = invoice.querySelector(".paper_invoice");
let e_invoice_setup = document.querySelector('.checkout-invoice_main .e_invoice_setup');
let paper_invoice_setup = document.querySelector('.checkout-invoice_main .paper_invoice_setup');

invoice.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.textContent === "電子發票"){
        e_invoice_setup.style.display = "flex";
        paper_invoice_setup.style.display = "none";
        e_invoice.style.background = "#EAF0ED";
        e_invoice.style.color = "#3F5D45";
        paper_invoice.style.background = "#3F5D45";
        paper_invoice.style.color = "#EAF0ED";
    } else if(e.target.textContent === "郵寄發票"){
        e_invoice_setup.style.display = "none";
        paper_invoice_setup.style.display = "flex";
        paper_invoice.style.background = "#EAF0ED";
        paper_invoice.style.color = "#3F5D45";
        e_invoice.style.background = "#3F5D45";
        e_invoice.style.color = "#EAF0ED";
    }
});
