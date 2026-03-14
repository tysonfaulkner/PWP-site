#!/usr/bin/env python3
"""Generate a professional branded PDF for the Piece Work Pro lead magnet."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas
from reportlab.lib import colors

# Brand colors (softened blue)
BLUE = HexColor("#3B82F6")
DARK_BLUE = HexColor("#2563EB")
LIGHT_BLUE = HexColor("#EFF6FF")
DARK_GRAY = HexColor("#1F2937")
MED_GRAY = HexColor("#4B5563")
LIGHT_GRAY = HexColor("#F3F4F6")
ACCENT_ORANGE = HexColor("#F59E0B")
GREEN = HexColor("#059669")
RED = HexColor("#DC2626")

WIDTH, HEIGHT = letter
MARGIN = 0.75 * inch

# --- Styles ---

style_title = ParagraphStyle(
    "Title",
    fontName="Helvetica-Bold",
    fontSize=28,
    leading=34,
    textColor=white,
    alignment=TA_CENTER,
    spaceAfter=12,
)

style_subtitle = ParagraphStyle(
    "Subtitle",
    fontName="Helvetica",
    fontSize=14,
    leading=20,
    textColor=HexColor("#BFDBFE"),
    alignment=TA_CENTER,
    spaceAfter=8,
)

style_author = ParagraphStyle(
    "Author",
    fontName="Helvetica-Oblique",
    fontSize=11,
    leading=16,
    textColor=HexColor("#93C5FD"),
    alignment=TA_CENTER,
)

style_h1 = ParagraphStyle(
    "H1",
    fontName="Helvetica-Bold",
    fontSize=22,
    leading=28,
    textColor=BLUE,
    spaceBefore=24,
    spaceAfter=12,
)

style_h2 = ParagraphStyle(
    "H2",
    fontName="Helvetica-Bold",
    fontSize=16,
    leading=22,
    textColor=DARK_BLUE,
    spaceBefore=18,
    spaceAfter=8,
)

style_body = ParagraphStyle(
    "Body",
    fontName="Helvetica",
    fontSize=11,
    leading=17,
    textColor=DARK_GRAY,
    spaceAfter=8,
)

style_body_bold = ParagraphStyle(
    "BodyBold",
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=17,
    textColor=DARK_GRAY,
    spaceAfter=8,
)

style_bullet = ParagraphStyle(
    "Bullet",
    fontName="Helvetica",
    fontSize=11,
    leading=17,
    textColor=DARK_GRAY,
    leftIndent=24,
    bulletIndent=12,
    spaceAfter=4,
    bulletFontName="Helvetica",
    bulletFontSize=11,
)

style_callout = ParagraphStyle(
    "Callout",
    fontName="Helvetica-Oblique",
    fontSize=11,
    leading=17,
    textColor=DARK_BLUE,
    leftIndent=16,
    rightIndent=16,
    spaceBefore=8,
    spaceAfter=8,
    borderPadding=12,
)

style_formula = ParagraphStyle(
    "Formula",
    fontName="Helvetica-Bold",
    fontSize=12,
    leading=18,
    textColor=DARK_GRAY,
    alignment=TA_CENTER,
    spaceBefore=8,
    spaceAfter=8,
)

style_example_label = ParagraphStyle(
    "ExampleLabel",
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=17,
    textColor=BLUE,
    spaceAfter=4,
    spaceBefore=8,
)

style_footer = ParagraphStyle(
    "Footer",
    fontName="Helvetica",
    fontSize=8,
    textColor=MED_GRAY,
    alignment=TA_CENTER,
)

style_cta_heading = ParagraphStyle(
    "CTAHeading",
    fontName="Helvetica-Bold",
    fontSize=18,
    leading=24,
    textColor=BLUE,
    alignment=TA_CENTER,
    spaceAfter=12,
)

style_cta_body = ParagraphStyle(
    "CTABody",
    fontName="Helvetica",
    fontSize=12,
    leading=18,
    textColor=DARK_GRAY,
    alignment=TA_CENTER,
    spaceAfter=6,
)

style_cta_url = ParagraphStyle(
    "CTAUrl",
    fontName="Helvetica-Bold",
    fontSize=14,
    leading=20,
    textColor=BLUE,
    alignment=TA_CENTER,
    spaceAfter=4,
)


def add_header_footer(canvas_obj, doc):
    """Add header line and footer to each page (not cover)."""
    canvas_obj.saveState()
    page_num = doc.page
    if page_num > 1:
        # Header line
        canvas_obj.setStrokeColor(BLUE)
        canvas_obj.setLineWidth(2)
        canvas_obj.line(MARGIN, HEIGHT - 0.5 * inch, WIDTH - MARGIN, HEIGHT - 0.5 * inch)

        # Header text
        canvas_obj.setFont("Helvetica", 8)
        canvas_obj.setFillColor(MED_GRAY)
        canvas_obj.drawString(MARGIN, HEIGHT - 0.45 * inch, "PIECE WORK PRO")
        canvas_obj.drawRightString(WIDTH - MARGIN, HEIGHT - 0.45 * inch,
                                   "How to Pay Your Crew 20% More and Double Your Profit")

        # Footer
        canvas_obj.setFont("Helvetica", 8)
        canvas_obj.setFillColor(MED_GRAY)
        canvas_obj.drawCentredString(WIDTH / 2, 0.4 * inch, f"Page {page_num - 1}")
        canvas_obj.drawRightString(WIDTH - MARGIN, 0.4 * inch, "pieceworkpro.com")

        # Footer line
        canvas_obj.setStrokeColor(LIGHT_GRAY)
        canvas_obj.setLineWidth(0.5)
        canvas_obj.line(MARGIN, 0.55 * inch, WIDTH - MARGIN, 0.55 * inch)
    canvas_obj.restoreState()


def build_cover(story):
    """Build the cover page."""
    # We'll use a table with background color to simulate the blue cover
    cover_data = [[""]]
    cover_table = Table(cover_data, colWidths=[WIDTH - 2 * MARGIN], rowHeights=[0.5 * inch])
    cover_table.setStyle(TableStyle([]))
    story.append(Spacer(1, 1.5 * inch))

    # Title block with blue background
    title_content = []
    title_content.append(Spacer(1, 0.3 * inch))
    title_content.append(Paragraph("PIECE WORK PRO", ParagraphStyle(
        "BrandTag", fontName="Helvetica-Bold", fontSize=12, leading=16,
        textColor=white, alignment=TA_CENTER, spaceAfter=20,
        letterSpacing=3,
    )))
    title_content.append(Spacer(1, 0.2 * inch))
    title_content.append(Paragraph(
        "How to Pay Your Crew<br/>20% More and Double<br/>Your Profit on Every Job",
        style_title
    ))
    title_content.append(Spacer(1, 0.3 * inch))
    title_content.append(Paragraph(
        "A Field Guide for Piece Rate Contractors Who Are<br/>"
        "Tired of Working Hard and Breaking Even",
        style_subtitle
    ))
    title_content.append(Spacer(1, 0.4 * inch))
    title_content.append(HRFlowable(
        width="30%", thickness=1, color=HexColor("#93C5FD"),
        spaceBefore=0, spaceAfter=16, hAlign="CENTER"
    ))
    title_content.append(Paragraph(
        "By Tyson Faulkner<br/>"
        "Owner of New Heights Roofing &amp; Founder of Piece Work Pro",
        style_author
    ))
    title_content.append(Spacer(1, 0.3 * inch))

    # Wrap in a blue background table
    inner = Table([[title_content]], colWidths=[WIDTH])
    inner.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BLUE),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 40),
        ("RIGHTPADDING", (0, 0), (-1, -1), 40),
        ("TOPPADDING", (0, 0), (-1, -1), 30),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 30),
        ("ROUNDEDCORNERS", (0, 0), (-1, -1), [0, 0, 0, 0]),
    ]))

    # Use negative margins to make the blue box full-width
    wrapper = Table([[inner]], colWidths=[WIDTH - 2 * MARGIN + 40])
    wrapper.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("LEFTPADDING", (0, 0), (-1, -1), -20),
        ("RIGHTPADDING", (0, 0), (-1, -1), -20),
    ]))

    story.append(wrapper)
    story.append(PageBreak())


def make_action_box(text):
    """Create a styled action step callout box."""
    content = [[Paragraph(text, style_callout)]]
    t = Table(content, colWidths=[WIDTH - 2 * MARGIN - 24])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_BLUE),
        ("BORDER_COLOR", (0, 0), (-1, -1), BLUE),
        ("LINEBEFOREBEFORE", (0, 0), (0, -1), 3, BLUE),
        ("BOX", (0, 0), (-1, -1), 0.5, HexColor("#BFDBFE")),
        ("LEFTPADDING", (0, 0), (-1, -1), 16),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return t


def make_comparison_table(title_a, items_a, title_b, items_b):
    """Create a side-by-side comparison."""
    col_width = (WIDTH - 2 * MARGIN - 12) / 2

    header_style = ParagraphStyle("CompHeader", fontName="Helvetica-Bold",
                                   fontSize=12, leading=16, textColor=white)
    item_style = ParagraphStyle("CompItem", fontName="Helvetica",
                                 fontSize=10, leading=15, textColor=DARK_GRAY)
    bold_item_style = ParagraphStyle("CompItemBold", fontName="Helvetica-Bold",
                                      fontSize=10, leading=15, textColor=DARK_GRAY)

    data = [[Paragraph(title_a, header_style), Paragraph(title_b, header_style)]]

    max_len = max(len(items_a), len(items_b))
    for i in range(max_len):
        a_text = items_a[i] if i < len(items_a) else ""
        b_text = items_b[i] if i < len(items_b) else ""

        a_style = bold_item_style if a_text.startswith("True") or a_text.startswith("**") else item_style
        b_style = bold_item_style if b_text.startswith("True") or b_text.startswith("**") else item_style

        a_text = a_text.replace("**", "")
        b_text = b_text.replace("**", "")

        data.append([Paragraph(a_text, a_style), Paragraph(b_text, b_style)])

    t = Table(data, colWidths=[col_width, col_width])
    style_cmds = [
        ("BACKGROUND", (0, 0), (0, 0), RED),
        ("BACKGROUND", (1, 0), (1, 0), GREEN),
        ("BACKGROUND", (0, 1), (0, -1), HexColor("#FEF2F2")),
        ("BACKGROUND", (1, 1), (1, -1), HexColor("#F0FDF4")),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#E5E7EB")),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]
    t.setStyle(TableStyle(style_cmds))
    return t


def make_bid_table():
    """Create the bid breakdown table with markup and gross profit."""
    header_style = ParagraphStyle("TH", fontName="Helvetica-Bold", fontSize=10,
                                   leading=14, textColor=white)
    cell_style = ParagraphStyle("TD", fontName="Helvetica", fontSize=10,
                                 leading=14, textColor=DARK_GRAY)
    bold_cell = ParagraphStyle("TDBold", fontName="Helvetica-Bold", fontSize=10,
                                leading=14, textColor=DARK_GRAY)
    # Math: total cost = 4680 + 10000 + 400 + 3636 = 18,716
    # 20% markup: 18716 * 0.20 = 3,743; bid = 22,459
    data = [
        [Paragraph("Line Item", header_style),
         Paragraph("Calculation", header_style),
         Paragraph("Amount", header_style)],
        [Paragraph("Labor (burdened)", cell_style),
         Paragraph("40 sq x $117", cell_style),
         Paragraph("$4,680", cell_style)],
        [Paragraph("Materials", cell_style),
         Paragraph("40 sq x $250", cell_style),
         Paragraph("$10,000", cell_style)],
        [Paragraph("Dump fees", cell_style),
         Paragraph("flat", cell_style),
         Paragraph("$400", cell_style)],
        [Paragraph("Overhead", cell_style),
         Paragraph("2 days x $1,818", cell_style),
         Paragraph("$3,636", cell_style)],
        [Paragraph("Total cost", bold_cell),
         Paragraph("", cell_style),
         Paragraph("$18,716", bold_cell)],
        [Paragraph("20% Markup", cell_style),
         Paragraph("$18,716 x 0.20", cell_style),
         Paragraph("$3,743", cell_style)],
        [Paragraph("Bid price", bold_cell),
         Paragraph("", cell_style),
         Paragraph("$22,459", bold_cell)],
    ]

    col_widths = [2.5 * inch, 2.2 * inch, 1.5 * inch]
    t = Table(data, colWidths=col_widths)
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BLUE),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("BACKGROUND", (0, 5), (-1, 5), LIGHT_BLUE),
        ("BACKGROUND", (0, 7), (-1, 7), LIGHT_BLUE),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#D1D5DB")),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ALIGN", (2, 0), (2, -1), "RIGHT"),
    ]))
    return t


def build_pdf():
    output_path = "/Users/tysonfaulkner/Software/PWP Site/pieceworkpro/content/lead-magnets/how-to-pay-your-crew-20-percent-more.pdf"

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=0.7 * inch,
        bottomMargin=0.7 * inch,
    )

    story = []

    # --- COVER PAGE ---
    build_cover(story)

    # --- INTRO ---
    story.append(Paragraph("You know the feeling.", style_body))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "You won the bid. Your crew knocked it out. The check cleared. And somehow, after "
        "payroll, materials, insurance, and that workers' comp bill you forgot about "
        "-- there's barely enough left to cover your truck payment.",
        style_body
    ))
    story.append(Paragraph(
        "You're not bad at your trade. You're one of the best. But somewhere between "
        "the handshake and the final invoice, the profit disappears.",
        style_body
    ))
    story.append(Paragraph(
        "Here's the part nobody tells you: <b>the contractors making the most money are "
        "also paying their crews the most.</b> That's not a contradiction. It's math. And "
        "by the end of this guide, you'll see exactly how it works.",
        style_body
    ))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=HexColor("#E5E7EB"),
                             spaceBefore=4, spaceAfter=4))

    # --- PART 1 ---
    story.append(Paragraph("Part 1: The Number That's Bleeding You Dry", style_h1))
    story.append(Paragraph(
        "Most contractors know two numbers: what they charge and what they pay. You bid a "
        "roofing job at $350 a square and pay your guys $45 a square for tear off and $45 a "
        "square to install. That's $90 per square in labor, leaving you $260 per square. "
        "Easy money, right?",
        style_body
    ))
    story.append(Paragraph("Not even close.", style_body_bold))
    story.append(Paragraph(
        "That $90 per square is just the start of what that labor actually costs you. "
        "On top of every dollar you pay in wages, you owe:",
        style_body
    ))

    burden_items = [
        ("<b>FICA (Social Security &amp; Medicare):</b> 7.65%", style_bullet),
        ("<b>Federal Unemployment (FUTA):</b> 0.6%", style_bullet),
        ("<b>State Unemployment (SUTA):</b> 2-6% depending on your state and claims history", style_bullet),
        ("<b>Workers' Compensation:</b> 5-30%+ depending on trade and state (roofing is one of the highest)", style_bullet),
        ("<b>General Liability Insurance:</b> varies, but it's a real cost per labor dollar", style_bullet),
        ("<b>Equipment, vehicles, and tools</b> your crew uses on the job", style_bullet),
    ]
    for text, s in burden_items:
        story.append(Paragraph(text, s, bulletText="\u2022"))

    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "Add it all up, and that $90/square in labor is actually costing you "
        "<b>$108 to $117 per square</b> when you factor in the full labor burden.",
        style_body
    ))
    story.append(Paragraph(
        "<b>That's 20-30% more than the number on the checks you hand them.</b>",
        style_body_bold
    ))
    story.append(Paragraph(
        "Most contractors bid against the base rate. The profitable ones bid against "
        "the burdened rate.",
        style_body
    ))

    # Burdened Rate Formula
    story.append(Paragraph("The Burdened Rate Formula", style_h2))
    story.append(Paragraph("Here's the simple version:", style_body))

    formula_box = Table(
        [[Paragraph("True Labor Cost = Base Piece Rate x (1 + Burden Percentage)", style_formula)]],
        colWidths=[WIDTH - 2 * MARGIN - 24]
    )
    formula_box.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_GRAY),
        ("BOX", (0, 0), (-1, -1), 1, HexColor("#D1D5DB")),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
    ]))
    story.append(formula_box)
    story.append(Spacer(1, 8))

    story.append(Paragraph(
        "If your burden rate is 30% and you pay $90/square ($45 tear off + $45 install):",
        style_body
    ))
    story.append(Paragraph(
        "$90 x 1.30 = <b>$117 actual cost per square</b>",
        style_body
    ))
    story.append(Paragraph("That changes your margin math completely:", style_body))
    story.append(Paragraph("<b>What you thought:</b> $350 - $90 = $260 margin per square", style_bullet, bulletText="\u2022"))
    story.append(Paragraph("<b>What's real:</b> $350 - $117 = $233 margin per square", style_bullet, bulletText="\u2022"))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "That's $27 per square you're not accounting for. On a 40-square roof, that's "
        "<b>$1,080 missing from a single job.</b> Multiply that across 100+ jobs a year "
        "and you start to see where the money goes.",
        style_body
    ))

    story.append(Spacer(1, 8))
    story.append(make_action_box(
        "<b>Action step:</b> Calculate your actual burden percentage. Add up every "
        "employer-paid cost -- taxes, insurance, comp, benefits -- and divide by total "
        "wages paid last year. Write that number down. You'll need it for everything that follows."
    ))

    # --- PART 2 ---
    story.append(Paragraph("Part 2: Why Paying More Actually Makes You More", style_h1))
    story.append(Paragraph(
        "This is the part that feels backwards until you see it play out.",
        style_body
    ))
    story.append(Paragraph(
        "Before we get into the comparison, think about your overhead. Most roofing "
        "companies running a few crews have fixed monthly costs around <b>$40,000/month</b> "
        "-- office rent, trucks, insurance, your salary, fuel, marketing, accounting, "
        "the whole nut. That doesn't change whether you complete 15 jobs this month or 20.",
        style_body
    ))
    story.append(Paragraph(
        "At roughly 22 working days per month, your overhead costs you about "
        "<b>$1,818 per day</b> whether a crew is producing or not. Every day a crew "
        "spends on a job is a day your overhead is running. Finish faster, and that "
        "overhead gets spread across more jobs -- which means more profit per job.",
        style_body
    ))
    story.append(Paragraph(
        "Now let's see how this plays out with two different crews on a 40-square tear off "
        "and re-roof.",
        style_body
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "Crew A is your B-team -- decent guys, decent speed. You pay them $40 a square "
        "for tear off and $40 a square to install. Crew B is your A-team -- fast, clean, "
        "experienced. You pay them $50 a square for tear off and $50 to install.",
        style_body
    ))
    story.append(Paragraph(
        "At first glance, Crew A looks cheaper. But watch what happens when you include "
        "your overhead:",
        style_body
    ))
    story.append(Spacer(1, 8))

    story.append(make_comparison_table(
        "Crew A ($80/sq)",
        [
            "4 guys, avg 14 sq/day",
            "40 squares = 3 days on-site",
            "Piece rate labor: $3,200",
            "Burdened at 30%: $4,160",
            "Overhead: 3 days x $1,818 = $5,454",
            "**True job cost: $9,614**",
        ],
        "Crew B ($100/sq)",
        [
            "4 guys, avg 20 sq/day",
            "40 squares = 2 days on-site",
            "Piece rate labor: $4,000",
            "Burdened at 30%: $5,200",
            "Overhead: 2 days x $1,818 = $3,636",
            "**True job cost: $8,836**",
        ],
    ))

    story.append(Spacer(1, 12))
    story.append(Paragraph(
        "Read those bottom lines again. <b>Crew B costs $1,040 more in labor but the job "
        "costs $778 less.</b>",
        style_body_bold
    ))
    story.append(Paragraph(
        "The extra day Crew A spent on-site burned $1,818 in overhead. That \"cheap\" "
        "crew just cost you <b>$1,818 more</b> than the guys you're paying $20 more "
        "per square.",
        style_body
    ))
    story.append(Paragraph(
        "And that's just the direct cost. Think about the <b>opportunity cost</b> -- "
        "that extra day Crew B saved means they're already starting the next job. If "
        "that frees up even <b>one more job per month</b>, that's $10,000-$15,000 in "
        "additional revenue you'd never have seen.",
        style_body
    ))
    story.append(Paragraph(
        "<b>Paying $20 more per square cost you $1,040 in labor. It saved you $1,818 in "
        "overhead and opened the door to another $10K+ job.</b>",
        style_body_bold
    ))

    # Retention section
    story.append(Paragraph("The Retention Multiplier", style_h2))
    story.append(Paragraph(
        "There's a cost most contractors never calculate: <b>what it costs when a good "
        "worker leaves.</b>",
        style_body
    ))
    story.append(Paragraph("Think about what happens when your best guy walks:", style_body))
    retention_items = [
        "2-4 weeks to find a replacement (if you're lucky)",
        "2-4 more weeks before the new guy is up to speed",
        "Lower production from the rest of the crew during the transition",
        "Mistakes and rework from the new guy learning your system",
        "The risk that other guys follow him out the door",
    ]
    for item in retention_items:
        story.append(Paragraph(item, style_bullet, bulletText="\u2022"))

    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "Conservative estimate: <b>losing one experienced piece rate worker costs you "
        "$10,000-$25,000</b> in lost production, recruiting, training, and rework.",
        style_body
    ))
    story.append(Paragraph(
        "If paying $5 more per unit keeps your best guys loyal for another year, "
        "that's the best money you ever spent.",
        style_body
    ))

    story.append(Spacer(1, 8))
    story.append(make_action_box(
        "<b>Action step:</b> Look at your crew turnover from last year. Count the guys "
        "who left. Multiply by $15,000 (a conservative middle estimate). That's what "
        "turnover cost your business. Now ask yourself: would a raise have been cheaper?"
    ))

    # --- PART 3 ---
    story.append(Paragraph("Part 3: Bidding With Your Eyes Open", style_h1))
    story.append(Paragraph("Here's where we put it all together.", style_body))
    story.append(Paragraph("Most contractors bid one of two ways:", style_body))
    story.append(Paragraph(
        '<b>1. From the gut.</b> "That looks like a $12,000 job." Based on experience, '
        "which is fine until the job surprises you.",
        style_bullet, bulletText=" "
    ))
    story.append(Paragraph(
        '<b>2. From the base rate.</b> "That\'s 40 squares at $90, so $3,600 in labor." '
        "Better, but still missing the real number.",
        style_bullet, bulletText=" "
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "The contractors who consistently profit bid a third way:",
        style_body
    ))
    story.append(Paragraph(
        "<b>3. From the fully burdened cost.</b> They know exactly what every unit of "
        "production costs them -- including the invisible costs -- and they price the job "
        "with that real number as the floor.",
        style_body
    ))

    # Profitable Bid Formula
    story.append(Paragraph("The Profitable Bid Formula", style_h2))

    formula_box2 = Table(
        [[Paragraph(
            "Minimum Bid = (Units x Burdened Labor Cost) + Materials<br/>"
            "+ Equipment + Overhead Allocation + Desired Profit",
            style_formula
        )]],
        colWidths=[WIDTH - 2 * MARGIN - 24]
    )
    formula_box2.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIGHT_GRAY),
        ("BOX", (0, 0), (-1, -1), 1, HexColor("#D1D5DB")),
        ("TOPPADDING", (0, 0), (-1, -1), 12),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 12),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
    ]))
    story.append(formula_box2)
    story.append(Spacer(1, 8))

    story.append(Paragraph("Let's run it on that same 40-square roof:", style_body))
    story.append(Spacer(1, 4))
    story.append(make_bid_table())
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "Now you know your <b>floor.</b> Anything below $18,716 and you're losing money. "
        "At $22,459 you're making a 20% markup -- but is that the same as 20% profit?",
        style_body
    ))

    # Margin vs Markup
    story.append(Paragraph("Markup vs. Gross Profit: The Mistake That Kills Contractors", style_h2))
    story.append(Paragraph(
        "These two words sound the same. They're not, and confusing them costs "
        "contractors thousands on every job.",
        style_body
    ))
    story.append(Paragraph(
        "<b>Markup:</b> What you add on top of cost. 20% markup on $18,716 = bid of "
        "<b>$22,459.</b> Your gross profit is $3,743 -- which is only 16.7% of the bid.",
        style_bullet, bulletText="\u2022"
    ))
    story.append(Paragraph(
        "<b>Gross profit margin:</b> What percentage of the final price is actual profit. "
        "If you want a true 20% gross profit, you divide cost by 0.80: "
        "$18,716 / 0.80 = <b>$23,395.</b> Your gross profit is $4,679.",
        style_bullet, bulletText="\u2022"
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "That's a <b>$936 difference</b> on a single 40-square job. Multiply that across "
        "100+ jobs a year and you're leaving <b>$93,000+</b> on the table because you used "
        "\"markup\" when you meant \"gross profit.\"",
        style_body
    ))

    story.append(Spacer(1, 8))
    story.append(make_action_box(
        "<b>Action step:</b> Check your estimating process. Are you applying a markup or "
        "targeting a gross profit margin? If you want 20% gross profit, you need to divide "
        "your total cost by 0.80 -- not multiply by 1.20. That one change could put tens of "
        "thousands back in your pocket this year."
    ))

    # --- PART 4 ---
    story.append(Paragraph("Part 4: The Compliance Trap That Can Wipe Out Everything", style_h1))
    story.append(Paragraph(
        "You've done the hard work. You know your burdened rate, you're paying your guys "
        "well, you're bidding with real numbers, and the profit is there.",
        style_body
    ))
    story.append(Paragraph(
        "Now let's make sure nobody takes it away from you.",
        style_body_bold
    ))
    story.append(Paragraph(
        "The federal government and most states have very specific rules about how you "
        "pay piece rate workers. And most contractors -- even the ones who've been doing "
        "this for 20 years -- are getting at least one of these wrong.",
        style_body
    ))

    # Trap 1
    story.append(Paragraph("Trap #1: Overtime on Piece Rate", style_h2))
    story.append(Paragraph(
        "If your crew works more than 40 hours in a week, you owe overtime. But here's "
        "the part that trips everyone up: <b>you can't just multiply the piece rate by 1.5.</b>",
        style_body
    ))
    story.append(Paragraph("The Fair Labor Standards Act requires you to:", style_body))
    story.append(Paragraph("1. Add up total piece rate earnings for the week", style_bullet, bulletText=" "))
    story.append(Paragraph('2. Divide by total hours worked to get the "regular rate"', style_bullet, bulletText=" "))
    story.append(Paragraph("3. Pay an additional 0.5x that regular rate for every hour over 40", style_bullet, bulletText=" "))

    story.append(Spacer(1, 4))
    story.append(Paragraph("Example:", style_example_label))
    story.append(Paragraph(
        "A worker earns $1,800 in piece rate pay and works 50 hours.",
        style_body
    ))
    story.append(Paragraph("Regular rate: $1,800 / 50 = $36/hr", style_bullet, bulletText="\u2022"))
    story.append(Paragraph("Overtime premium: $36 x 0.5 = $18/hr", style_bullet, bulletText="\u2022"))
    story.append(Paragraph("Overtime pay: $18 x 10 hours = $180", style_bullet, bulletText="\u2022"))
    story.append(Paragraph("<b>Total owed: $1,800 + $180 = $1,980</b>", style_bullet, bulletText="\u2022"))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "Most contractors either skip this entirely or calculate it wrong. Both are violations.",
        style_body
    ))

    # Trap 2
    story.append(Paragraph("Trap #2: Minimum Wage Makeup Pay", style_h2))
    story.append(Paragraph(
        "If a worker's piece rate earnings divided by hours worked falls below the minimum "
        "wage, <b>you owe the difference.</b> This happens more often than you'd think -- "
        "a slow week, bad weather, a job that takes longer than expected.",
        style_body
    ))
    story.append(Paragraph("Example:", style_example_label))
    story.append(Paragraph(
        "A worker earns $400 in piece rate pay and works 45 hours in a state with a "
        "$15 minimum wage.",
        style_body
    ))
    story.append(Paragraph("Effective hourly rate: $400 / 45 = $8.89/hr", style_bullet, bulletText="\u2022"))
    story.append(Paragraph("Minimum wage: $15/hr", style_bullet, bulletText="\u2022"))
    story.append(Paragraph("Shortfall per hour: $6.11", style_bullet, bulletText="\u2022"))
    story.append(Paragraph("<b>Makeup pay owed: $6.11 x 45 = $274.95</b>", style_bullet, bulletText="\u2022"))

    # Trap 3
    story.append(Paragraph("Trap #3: State-Specific Landmines", style_h2))
    story.append(Paragraph(
        "Some states have rules that go far beyond federal requirements:",
        style_body
    ))
    story.append(Paragraph(
        "<b>California (AB 1513):</b> You must pay piece rate workers separately for "
        "rest periods and recovery periods. Violations come with penalties per worker, "
        "per pay period.",
        style_bullet, bulletText="\u2022"
    ))
    story.append(Paragraph(
        "<b>Washington:</b> Piece rate workers must be paid at least minimum wage for "
        "all hours, including non-productive time.",
        style_bullet, bulletText="\u2022"
    ))
    story.append(Paragraph(
        "<b>New York:</b> Specific pay stub requirements for piece rate workers showing "
        "units completed, rate per unit, and hours worked.",
        style_bullet, bulletText="\u2022"
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph("The penalties for getting this wrong aren't small:", style_body))
    penalty_items = [
        "<b>Back pay</b> for every affected worker, going back 2-3 years",
        "<b>Liquidated damages</b> -- often double the back pay owed",
        "<b>Penalties</b> -- per worker, per pay period, per violation",
        "<b>Attorney fees</b> -- theirs and yours",
        "<b>DOL investigation</b> -- which often uncovers other issues",
    ]
    for item in penalty_items:
        story.append(Paragraph(item, style_bullet, bulletText="\u2022"))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "One wage claim from one unhappy worker can trigger an audit that covers your "
        "entire crew. A $2,000 mistake can become a $200,000 problem.",
        style_body_bold
    ))

    # Trap 4
    story.append(Paragraph("Trap #4: Recordkeeping", style_h2))
    story.append(Paragraph(
        "The FLSA requires you to keep detailed records for every piece rate worker:",
        style_body
    ))
    records = [
        "Hours worked each day and each week",
        "Total piece rate earnings",
        "Regular rate calculation",
        "Overtime hours and pay",
        "Total compensation paid",
    ]
    for item in records:
        story.append(Paragraph(item, style_bullet, bulletText="\u2022"))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "If you're tracking this on paper or spreadsheets, ask yourself: could you "
        "produce these records for every worker for the last three years if the "
        "Department of Labor showed up tomorrow?",
        style_body
    ))

    story.append(Spacer(1, 8))
    story.append(make_action_box(
        "<b>Action step:</b> Pick one crew member at random. Can you pull up their hours "
        "worked, pieces completed, regular rate, and overtime calculation for any week in "
        "the last year? If the answer is anything other than an immediate yes, you have a "
        "recordkeeping gap that puts your business at risk."
    ))

    # --- PART 5 ---
    story.append(Paragraph("Part 5: Putting It All Together", style_h1))
    story.append(Paragraph("Let's recap what we've covered:", style_body))

    recap_items = [
        "<b>Your real labor cost is 25-45% higher than the check you write.</b> "
        "If you're not bidding against the burdened rate, you're bidding blind.",
        "<b>Paying your best guys more makes you more money</b>, not less. "
        "Speed, quality, and retention compound into massive gains over a season.",
        "<b>Bidding with fully burdened costs and real margin targets</b> is the "
        "difference between building wealth and just staying busy.",
        "<b>Compliance isn't optional.</b> Overtime, minimum wage makeup, state rules, "
        "and recordkeeping -- getting any of these wrong can wipe out a year of profit.",
    ]
    for i, item in enumerate(recap_items, 1):
        story.append(Paragraph(f"{i}. {item}", style_body))

    story.append(Paragraph("The Two Paths Forward", style_h2))
    story.append(Paragraph(
        "<b>Path 1: Do it yourself.</b> Take the formulas in this guide, build a spreadsheet, "
        "calculate your burdened rate, track hours and pieces for every worker, run overtime "
        "calcs weekly, verify minimum wage compliance every pay period, and keep records for "
        "three years. It works. It's just a lot of work.",
        style_body
    ))
    story.append(Paragraph(
        "<b>Path 2: Let the software do it.</b> Piece Work Pro was built by a contractor "
        "who was doing exactly what you're doing -- spending weekends on payroll instead "
        "of with his family or selling the next job.",
        style_body
    ))
    story.append(Paragraph("Here's what it handles automatically:", style_body))
    features = [
        "<b>Piece work tracking</b> -- your crew logs units from their phone when they clock out",
        "<b>Time tracking</b> -- clock in/out with GPS, so you know they're on the right site",
        "<b>Payroll reports</b> -- pull payroll for any date range in minutes, not hours",
        "<b>Job costing</b> -- see exactly what every job costs in labor before it's too late",
        "<b>Custom pay rates</b> -- piece rate, hourly, or hybrid, per task or per crew member",
    ]
    for item in features:
        story.append(Paragraph(item, style_bullet, bulletText="\u2022"))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "The Solo plan is <b>free forever</b> for one user. The Team plan is "
        "<b>$10/user/month</b> -- far less than what one payroll mistake costs you.",
        style_body
    ))

    # --- CTA PAGE ---
    story.append(PageBreak())
    story.append(Spacer(1, 1.5 * inch))

    cta_box_content = []
    cta_box_content.append(Paragraph("Ready to See Your Real Numbers?", style_cta_heading))
    cta_box_content.append(Spacer(1, 8))
    cta_box_content.append(Paragraph(
        "Before you sign up for anything, try the free tools on our site.<br/>"
        "No email required. No signup. Just answers.",
        style_cta_body
    ))
    cta_box_content.append(Spacer(1, 12))
    cta_box_content.append(Paragraph(
        "Crew Payroll Cost Calculator -- see your true burdened labor cost",
        style_cta_body
    ))
    cta_box_content.append(Paragraph(
        "Job Profit Calculator -- find out if you're making money on your jobs",
        style_cta_body
    ))
    cta_box_content.append(Paragraph(
        "Piece Rate Pay Calculator -- project what your crew earns at different rates",
        style_cta_body
    ))
    cta_box_content.append(Spacer(1, 16))
    cta_box_content.append(Paragraph("pieceworkpro.com/tools", style_cta_url))
    cta_box_content.append(Spacer(1, 20))
    cta_box_content.append(HRFlowable(
        width="40%", thickness=1, color=HexColor("#D1D5DB"),
        spaceBefore=0, spaceAfter=16, hAlign="CENTER"
    ))
    cta_box_content.append(Paragraph(
        "When you're ready to stop guessing and start tracking:",
        style_cta_body
    ))
    cta_box_content.append(Spacer(1, 8))
    cta_box_content.append(Paragraph("Start Free at pieceworkpro.com", ParagraphStyle(
        "BigCTA", fontName="Helvetica-Bold", fontSize=18, leading=24,
        textColor=white, alignment=TA_CENTER,
    )))

    cta_table = Table([[cta_box_content]], colWidths=[WIDTH - 2 * MARGIN])
    cta_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), white),
        ("BOX", (0, 0), (-1, -1), 2, BLUE),
        ("TOPPADDING", (0, 0), (-1, -1), 30),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 30),
        ("LEFTPADDING", (0, 0), (-1, -1), 30),
        ("RIGHTPADDING", (0, 0), (-1, -1), 30),
    ]))
    story.append(cta_table)

    # CTA button (blue box inside)
    # We already have the URL above, add the button-style element
    story.append(Spacer(1, 20))

    # Blue CTA button
    btn = Table(
        [[Paragraph("START FREE NOW", ParagraphStyle(
            "BtnText", fontName="Helvetica-Bold", fontSize=14, textColor=white,
            alignment=TA_CENTER,
        ))]],
        colWidths=[3 * inch],
        rowHeights=[0.5 * inch],
    )
    btn.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BLUE),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ROUNDEDCORNERS", (0, 0), (-1, -1), [6, 6, 6, 6]),
    ]))
    btn_wrapper = Table([[btn]], colWidths=[WIDTH - 2 * MARGIN])
    btn_wrapper.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
    ]))
    story.append(btn_wrapper)

    story.append(Spacer(1, 1 * inch))

    # Author bio
    story.append(HRFlowable(width="100%", thickness=0.5, color=HexColor("#E5E7EB"),
                             spaceBefore=8, spaceAfter=12))
    bio_style = ParagraphStyle("Bio", fontName="Helvetica-Oblique", fontSize=9,
                                leading=14, textColor=MED_GRAY, alignment=TA_CENTER)
    story.append(Paragraph(
        "Tyson Faulkner is the owner of New Heights Roofing in Post Falls, Idaho, "
        "and the founder of Piece Work Pro. He built the software after years of "
        "spreadsheet payroll, calculator-tape bids, and learning the hard way that "
        "knowing your numbers is the difference between building a business and "
        "just having a job.",
        bio_style
    ))

    # Build
    doc.build(story, onFirstPage=lambda c, d: None, onLaterPages=add_header_footer)
    print(f"PDF created: {output_path}")


if __name__ == "__main__":
    build_pdf()
