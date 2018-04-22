<?php

/* modules/superslides/templates/superslides-style.html.twig */
class __TwigTemplate_14f4ea48a7a9f9f8014319276af8ece856944ef3db44128e00f20d0e4f1cf02c extends Twig_Template
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
        $tags = array("for" => 12, "if" => 16);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('for', 'if'),
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

        // line 7
        echo "<!-- For fullscreen slider -->

  <div id=\"";
        // line 9
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slider_id"] ?? null), "html", null, true));
        echo "\">
    <div class=\"slides-container\">
      
      ";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["data"] ?? null));
        $context['loop'] = array(
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        );
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 13
            echo "      
      <div class=\"superslide-slide\">
      
      ";
            // line 16
            if ($this->getAttribute($context["item"], "image", array())) {
                // line 17
                echo "      
      <div class=\"superslide-image animated ";
                // line 18
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "image", array()), "options", array()), "show_animation", array()), "html", null, true));
                echo "\" style=\"animation-duration: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "image", array()), "options", array()), "duration", array()), "html", null, true));
                echo "s; animation-delay: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "image", array()), "options", array()), "delay", array()), "html", null, true));
                echo "s;\" id=\"superslide-image-";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["loop"], "index", array()), "html", null, true));
                echo "\">
        ";
                // line 19
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "image", array()), "value", array()), "html", null, true));
                echo "
      </div>
      
      ";
            }
            // line 23
            echo "      
        <div class=\"superslide-caption\">
      
      ";
            // line 26
            if ($this->getAttribute($context["item"], "string", array())) {
                // line 27
                echo "      
        <div class=\"superslide-caption-title animated ";
                // line 28
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "string", array()), "options", array()), "show_animation", array()), "html", null, true));
                echo "\" style=\"animation-duration: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "string", array()), "options", array()), "duration", array()), "html", null, true));
                echo "s; animation-delay: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "string", array()), "options", array()), "delay", array()), "html", null, true));
                echo "s;\" id=\"superslide-title-";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["loop"], "index", array()), "html", null, true));
                echo "\">
            ";
                // line 29
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "string", array()), "value", array()), "html", null, true));
                echo "
        </div>
        
      ";
            }
            // line 33
            echo "
      ";
            // line 34
            if ($this->getAttribute($context["item"], "text_with_summary", array())) {
                // line 35
                echo "        
        <div class=\"superslide-caption-body animated ";
                // line 36
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "text_with_summary", array()), "options", array()), "show_animation", array()), "html", null, true));
                echo "\" style=\"animation-duration: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "text_with_summary", array()), "options", array()), "duration", array()), "html", null, true));
                echo "s; animation-delay: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "text_with_summary", array()), "options", array()), "delay", array()), "html", null, true));
                echo "s;\" id=\"superslide-body-";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["loop"], "index", array()), "html", null, true));
                echo "\">
            ";
                // line 37
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "text_with_summary", array()), "value", array()), "html", null, true));
                echo "
        </div>
      
      ";
            }
            // line 41
            echo "        
       ";
            // line 42
            if ($this->getAttribute($context["item"], "link", array())) {
                echo " 
        
        <div class=\"superslide-caption-link animated ";
                // line 44
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "link", array()), "options", array()), "show_animation", array()), "html", null, true));
                echo "\" style=\"animation-duration: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "link", array()), "options", array()), "duration", array()), "html", null, true));
                echo "s; animation-delay: ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "link", array()), "options", array()), "delay", array()), "html", null, true));
                echo "s;\" id=\"superslide-link-";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["loop"], "index", array()), "html", null, true));
                echo "\">
        ";
                // line 45
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], "link", array()), "value", array()), "html", null, true));
                echo "
        </div>
        
       ";
            }
            // line 48
            echo "   
        
        </div>
       
       
        
        </div>
        
        ";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 57
        echo "        
      
  
    </div>

    <nav class=\"slides-navigation\">
      <a href=\"#\" class=\"next\">Next</a>
      <a href=\"#\" class=\"prev\">Previous</a>
    </nav>
  </div>
  ";
    }

    public function getTemplateName()
    {
        return "modules/superslides/templates/superslides-style.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  196 => 57,  174 => 48,  167 => 45,  157 => 44,  152 => 42,  149 => 41,  142 => 37,  132 => 36,  129 => 35,  127 => 34,  124 => 33,  117 => 29,  107 => 28,  104 => 27,  102 => 26,  97 => 23,  90 => 19,  80 => 18,  77 => 17,  75 => 16,  70 => 13,  53 => 12,  47 => 9,  43 => 7,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/superslides/templates/superslides-style.html.twig", "/Applications/AMPPS/www/www.lptest.com/drupal-project/web/modules/superslides/templates/superslides-style.html.twig");
    }
}
