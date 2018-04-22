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
        $tags = array("if" => 104);
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

        // line 1
        echo "

";
        // line 50
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
        // line 79
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
        // line 95
        echo "-->

<div class=\"layout-content\">
    <div class=\"container-fluid\">
    ";
        // line 99
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
        echo "
    </div>

</div>";
        // line 103
        echo "
    ";
        // line 104
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 105
            echo "        <aside class=\"layout-sidebar-first\" role=\"complementary\">
            ";
            // line 106
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
        </aside>
    ";
        }
        // line 109
        echo "
    ";
        // line 110
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", array())) {
            // line 111
            echo "        <aside class=\"layout-sidebar-second\" role=\"complementary\">
            ";
            // line 112
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", array()), "html", null, true));
            echo "
        </aside>
    ";
        }
        // line 115
        echo "
<!-- </main>-->
<!--</div>-->

<footer class=\" bd-footerarea-1\">
    <section class=\" bd-section-2 bd-tagstyles bd-aligncontent bd-aligncontent-7\" data-aligncontent-size=\"page\" id=\"section4\" data-section-title=\"Four Columns\">
        <div class=\"bd-section-inner\">
            <div class=\"bd-section-align-wrapper\">
                <div class=\" bd-layoutcontainer-7 bd-columns\">
                    <div class=\"bd-container-inner\">
                        <div class=\"container-fluid\">
                            <div class=\"row
 bd-row-flex
 bd-row-align-top\">
                                <div class=\" bd-columnwrapper-12
 col-md-3
 col-sm-6\">
                                    <div class=\"bd-layoutcolumn-12 bd-column\" ><div class=\"bd-vertical-align-wrapper\"><span class=\"bd-iconlink-2 bd-icon-27 bd-icon \"></span>

                                            <div class=\" bd-spacer-8 clearfix\"></div>

                                            <p class=\" bd-textblock-21 bd-content-element\">

                                            </p></div></div>
                                </div>

                                <div class=\" bd-columnwrapper-17
 col-md-3
 col-sm-6\">
                                    <div class=\"bd-layoutcolumn-17 bd-column\" ><div class=\"bd-vertical-align-wrapper\"><span class=\"bd-iconlink-5 bd-icon-31 bd-icon \"></span>

                                            <div class=\" bd-spacer-12 clearfix\"></div>

                                            <p class=\" bd-textblock-26 bd-content-element\">
                                                <br>
                                            </p></div></div>
                                </div>

                                <div class=\" bd-columnwrapper-20
 col-md-3
 col-sm-6\">
                                    <div class=\"bd-layoutcolumn-20 bd-background-width  bd-column\" ><div class=\"bd-vertical-align-wrapper\"><span class=\"bd-iconlink-7 bd-icon-35 bd-icon \"></span>

                                            <div class=\" bd-spacer-16 clearfix\"></div>

                                            <p class=\" bd-textblock-28 bd-content-element\">
                                                <br>
                                                <br><br>
                                            </p></div></div>
                                </div>

                                <div class=\" bd-columnwrapper-22
 col-md-3
 col-sm-6\">
                                    <div class=\"bd-layoutcolumn-22 bd-column\" ><div class=\"bd-vertical-align-wrapper\"><div class=\" bd-socialicons-2\">

                                                <a target=\"_blank\" data-social-url data-path-to-root=\".\" class=\" bd-socialicon-17 bd-socialicon\"
                                                   >
                                                    <span class=\"bd-icon\"></span><span></span>
                                                </a>




                                                <a target=\"_blank\" data-social-url data-path-to-root=\".\" class=\" bd-socialicon-21 bd-socialicon\"
                                                   href=\"\">
                                                    <span class=\"bd-icon\"></span><span></span>
                                                </a>





                                            </div>

                                            <p class=\" bd-textblock-30 bd-content-element\">
                                                <br>All Rights Reserved.
                                            </p></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</footer>

<div data-smooth-scroll data-animation-time=\"250\" class=\" bd-smoothscroll-3\"><a href=\"#\" class=\" bd-backtotop-1 \">
        <span class=\"bd-icon-67 bd-icon \"></span>
    </a></div>




";
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
        return array (  137 => 115,  131 => 112,  128 => 111,  126 => 110,  123 => 109,  117 => 106,  114 => 105,  112 => 104,  109 => 103,  103 => 99,  97 => 95,  78 => 79,  47 => 50,  43 => 1,);
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
