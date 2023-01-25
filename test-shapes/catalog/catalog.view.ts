enum DataForms {
    circle = 'circle',
    square = 'square',
    triangle = 'triangle',
}

const DataShape = $mol_data_record({
    form: $mol_data_enum('Form', DataForms),
    color: $mol_data_string,
    dark: $mol_data_boolean,
})

const Data = $mol_data_array(DataShape)

enum Bright {
    dark = 'dark',
    light = 'light',
}

export class $my_shapes_catalog extends $.$my_shapes_catalog {

    @$mol_mem
    data() {
        const data = $mol_fetch.json('/my/shapes/data/shapes.json') as any
        return Data(data).map(({ form, color, dark }) => ({
            form,
            color,
            bright: dark ? Bright.dark : Bright.light,
        }))
    }

    @$mol_mem
    data_filtered() {
        return this.data().filter(
            shape => this.form(shape.form) && this.color(shape.color) && this.bright(shape.bright)
        )
    }

    @$mol_mem
    items() {
        return this.data_filtered().map((_, index) => this.Item(index))
    }

    item_form(index: number) {
        return this.data_filtered()[index].form
    }

    item_color(index: number) {
        return this.data_filtered()[index].color
    }

    item_bright(index: number) {
        return this.data_filtered()[index].bright
    }

}