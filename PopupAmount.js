frappe.ui.form.on("Sales Order", {
    validate: function(frm) {
        frappe.msgprint("Total Amount: Rp " + frm.doc.net_total);
    }
});