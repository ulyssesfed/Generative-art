let w = 1200,
    h = 1000;
// Where the code starts and ends
let code_start = h / 60;
let code_end = h - h / 100;
// Code Line Thickness
let code_size = 10;
// Code Segments (Number and length)
let min_segments = 5;
let max_segments = 16;
let min_segment_length = 5;
let max_segment_length = 60;
let segment_sep = 20;
// Lines of code
let code_lines = 60;
let code_sep = (code_end - code_start) / code_lines;
let line_break_chance = .4;
// Indent values
let indent_size = 50;
let max_indents = 6;
let indent_inc_chance = .4;
let indent_dec_chance = .3;

// Random Colors
random_colors=false;

// Higher value means the color will change more often
change_chance=.4;

// If you want to use your own color palette, just set random colors to false
let colors = [[113, 140, 130], [79, 164, 165], [202, 166, 122], [212, 117, 100]];

// Background Color
bc=(98,114,164);

function set_random_color() {
    stroke(random(50,200), random(50,200), random(50,200));
}

function set_palette_color() {
    let c = colors[int(random(colors.length))];
    stroke(c[0], c[1], c[2]);
}

function setup() {
    // Take advantage of resolution
    pixelDensity(2);
    
    // Setting the size and background
    createCanvas(w,h);
    background(70,70,90);
    
    // Type of lines and size
    strokeCap(ROUND);
    strokeWeight(code_size);
    
    if(random_colors==true){
        set_random_color();
    } else {
        set_palette_color();
    }
    
    let line_y=code_start;
	    let indent = 0;
    for (let i = 0; i < code_lines; i++) {
        if (!(random(1) < line_break_chance && indent == 0)) {
            let line_x = indent_size + (indent * indent_size);
            let line_segments = int(random(min_segments, max_segments));
            for (let j = 0; j < line_segments; j++) {
                if (random(1) < change_chance) {
                    set_palette_color();
                }
                let segment_length = random(min_segment_length, max_segment_length);
                line(line_x, line_y, line_x + segment_length, line_y);
                line_x = line_x + segment_length + segment_sep;
                if (random(1) < indent_inc_chance && indent < max_indents) {
                    indent += 1;
                } else if (random(1) < indent_dec_chance && indent > 0) {
                    indent -= int(random(1,max_indents));
                    if(indent<0){
                        indent=0;
                    }
                }
            }
        }
        line_y += code_sep;
    }
    let seed=int(random(10000));
    console.log(seed);
}
