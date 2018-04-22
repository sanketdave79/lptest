<?php

/* themes/nextgen/templates/html.html.twig */
class __TwigTemplate_efbb12e9e57f505365b17fefc2a3267bdd5bf7845649f48398b363dab3afd8eb extends Twig_Template
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
        $tags = array();
        $filters = array("raw" => 31, "safe_join" => 32);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array(),
                array('raw', 'safe_join'),
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

        // line 28
        echo "<!DOCTYPE html>
<html";
        // line 29
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["html_attributes"] ?? null), "html", null, true));
        echo ">
<head>
    <head-placeholder token=\"";
        // line 31
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\"/>
        <title>";
        // line 32
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->safeJoin($this->env, ($context["head_title"] ?? null), " | ")));
        echo "</title>
        <css-placeholder token=\"";
        // line 33
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\"/>
            <js-placeholder token=\"";
        // line 34
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\"/>
                <script>
                    var themeHasJQuery = !!window.jQuery;
                </script>
                <script type=\"text/javascript\" src=\"http://www.lptest.com/drupal-project/web/assets/js/jquery.js?1.0.721\"></script>
                <script>
                    window._\$ = jQuery.noConflict(themeHasJQuery);
                </script>
                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
                <link rel=\"stylesheet\" href=\"http://www.lptest.com/drupal-project/web/assets/css/bootstrap.css?1.0.721\" media=\"screen\" />
                <script type=\"text/javascript\" src=\"http://www.lptest.com/drupal-project/web/assets/js/bootstrap.min.js?1.0.721\"></script>
                <!--[if lte IE 9]>
                <link rel=\"stylesheet\" href=\"http://www.lptest.com/drupal-project/web/assets/css/layout.ie.css?1.0.721\">
                <script src=\"http://www.lptest.com/drupal-project/web/assets/js/layout.ie.js?1.0.721\"></script>
                <![endif]-->
                <link class=\"\" href='http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic&subset=latin' rel='stylesheet' type='text/css'>
                <script type=\"text/javascript\" src=\"http://www.lptest.com/drupal-project/web/assets/js/layout.core.js\"></script>
                <script src=\"http://www.lptest.com/drupal-project/web/assets/js/CloudZoom.js?1.0.721\"></script>
                <link rel=\"stylesheet\" href=\"http://www.lptest.com/drupal-project/web/assets/css/style.css?1.0.721\">
                <script src=\"http://www.lptest.com/drupal-project/web/assets/js/script.js?1.0.721\"></script>

    <script src=\"http://www.lptest.com/drupal-project/web/assets/js/jquery.cycle/jquery.cycle.all.js\"></script>
    <script src=\"http://www.lptest.com/drupal-project/web/assets/js/jquery.cycle/jquery.cycle.lite.js\"></script>
    <script src=\"http://www.lptest.com/drupal-project/web/assets/js/jquery.hoverintent/jquery.hoverintent.js\"></script>
                <meta charset=\"utf-8\">



                <meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">


                <style>a {
                        transition: color 250ms linear;
                    }
                </style>

                </head>
<body";
        // line 71
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["attributes"] ?? null), "html", null, true));
        echo ">
<a href=\"#main-content\" class=\"visually-hidden focusable\">

</a>
";
        // line 75
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_top"] ?? null), "html", null, true));
        echo "
";
        // line 76
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page"] ?? null), "html", null, true));
        echo "
";
        // line 77
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["page_bottom"] ?? null), "html", null, true));
        echo "
<js-bottom-placeholder token=\"";
        // line 78
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(($context["placeholder_token"] ?? null)));
        echo "\"/>
</body>
</html>";
    }

    public function getTemplateName()
    {
        return "themes/nextgen/templates/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  122 => 78,  118 => 77,  114 => 76,  110 => 75,  103 => 71,  63 => 34,  59 => 33,  55 => 32,  51 => 31,  46 => 29,  43 => 28,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/nextgen/templates/html.html.twig", "/Applications/AMPPS/www/www.lptest.com/drupal-project/web/themes/nextgen/templates/html.html.twig");
    }
}
