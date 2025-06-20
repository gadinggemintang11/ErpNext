frappe.ui.form.on("Sales Order", {
    refresh: function(frm) {
        if (frm.doc.docstatus === 1 && frm.doc.status !== 'Closed') {
            frm.add_custom_button(__('Make Delivery Note'), function () {
                frappe.model.open_mapped_doc({
                    method: "erpnext.selling.doctype.sales_order.sales_order.make_delivery_note",
                    frm: frm
                });
            }, __('Create'));
        }
    }
});