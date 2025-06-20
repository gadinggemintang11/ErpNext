frappe.ui.form.on("Sales Order", {
    onload: function(frm) {
        const fields_to_show = [
            "item_code",
            "item_name",
            "description",
            "delivery_date",
            "qty",
            "uom",
            "rate",
            "amount",
            "warehouse",
            "brand",
            "batch_no",
            "weight_per_unit",
            "custom_flag"
        ];

        // Aktifkan field di list view item table
        fields_to_show.forEach(fieldname => {
            frm.fields_dict["items"].grid.update_docfield_property(fieldname, "in_list_view", 1);
        });
    }
});
