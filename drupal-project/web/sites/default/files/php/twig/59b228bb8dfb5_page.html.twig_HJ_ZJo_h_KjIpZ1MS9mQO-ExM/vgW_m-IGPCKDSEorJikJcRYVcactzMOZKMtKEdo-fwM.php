<?php

/* themes/nextgen/templates/page.html.twig */
class __TwigTemplate_7e23d51e9da2f9950bc6446b40c8c0fd82400a0fdab53cb316fb8d58e2a76c75 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 89);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 48
        echo "<header class=\" bd-headerarea-1\">
    <section class=\" bd-section-4 bd-page-width bd-tagstyles bd-aligncontent bd-aligncontent-5 \" data-aligncontent-size=\"page\" id=\"section3\" data-section-title=\"Simple Header\">
        <div class=\"bd-section-inner\">
            <div class=\"bd-section-align-wrapper\">
                <a class=\" bd-logo-2 bd-imagescaling bd-imagescaling-3\" href=\"\">
                    <img class=\" bd-imagestyles-8\" src=\"http://www.lptest.com/drupal-project/web/assets/images/logo.nextgen.png\" alt=\"\">
                </a>
                <div class=\" bd-spacer-19 clearfix\"></div>
                <nav class=\" bd-hmenu-1 bd-page-width \" data-responsive-menu=\"true\" data-responsive-levels=\"\">
                    <div class=\" bd-responsivemenu-11 collapse-button\">
                        <div class=\"bd-container-inner\">
                            <div class=\" bd-menuitem-4\">
                                <a  data-toggle=\"collapse\"
                                    data-target=\".bd-hmenu-1 .collapse-button + .navbar-collapse\"
                                    href=\"#\" onclick=\"return false;\">
                                    <span>Menu</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class=\"navbar-collapse collapse\">
                        <div class=\" bd-horizontalmenu-1 clearfix\">
                            <div class=\"bd-container-inner\">
                                ";
        // line 71
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "primary_menu", array()), "html", null, true));
        echo "
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </section>
</header>
<!--<div class=\"container-fluid\">-->
<!--<main role=\"main\">
   <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 82
        echo "-->
<div class=\"layout-content\">
    <div class=\"container-fluid\">
        ";
        // line 85
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
        echo "
    </div>
</div>
";
        // line 89
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 90
            echo "    <aside class=\"layout-sidebar-first\" role=\"complementary\">
        ";
            // line 91
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
    </aside>
";
        }
        // line 94
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", array())) {
            // line 95
            echo "    <aside class=\"layout-sidebar-second\" role=\"complementary\">
        ";
            // line 96
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", array()), "html", null, true));
            echo "
    </aside>
";
        }
        // line 99
        echo "<!-- </main>-->
<!--</div>-->
<footer class=\" bd-footerarea-1\">
    <section class=\" bd-section-2 bd-tagstyles bd-aligncontent bd-aligncontent-7\" data-aligncontent-size=\"page\" id=\"section4\" data-section-title=\"Four Columns\">
        <div class=\"bd-section-inner\">

        </div>
    </section>
</footer>
<div data-smooth-scroll data-animation-time=\"250\" class=\" bd-smoothscroll-3\"><a href=\"#\" class=\" bd-backtotop-1 \">
        <span class=\"bd-icon-67 bd-icon \"></span>
    </a>
</div>";
    }

    public function getTemplateName()
    {
        return "themes/nextgen/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 99,  109 => 96,  106 => 95,  104 => 94,  98 => 91,  95 => 90,  93 => 89,  87 => 85,  82 => 82,  68 => 71,  43 => 48,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/nextgen/templates/page.html.twig", "/Applications/AMPPS/www/www.lptest.com/drupal-project/web/themes/nextgen/templates/page.html.twig");
    }
}
